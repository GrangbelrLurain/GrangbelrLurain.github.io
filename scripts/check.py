#!/usr/bin/env python3
"""Resume lint for the four kyuyeon-kim pages.

Adapted to read local page source (or a directory of served HTML copies).
Rules match the 2026-09-28 spec. Patterns are not relaxed.

Usage:
  python3 scripts/check.py
  python3 scripts/check.py resumes/kyuyeon-kim-ko.html
"""

from __future__ import annotations

import re
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_PAGES = [
    ROOT / "resumes" / "kyuyeon-kim-ko.html",
    ROOT / "resumes" / "kyuyeon-kim-fullstack-ko.html",
    ROOT / "resumes" / "kyuyeon-kim-en.html",
    ROOT / "resumes" / "kyuyeon-kim-agentic-ko.html",
]

KO_BANNED = [
    "체계화",
    "구조로 전환",
    "확보",
    "고도화",
    "가시성",
    "끝까지 소유",
    "BE 의존 없이",
    "면밀히",
    "워크플로우 단순화",
    "한계를 판단",
    "기반으로",
]
EN_BANNED = [
    "established",
    "robust",
    "seamless",
    "leveraged",
    "spearheaded",
    "ensuring",
    "large admin surface",
    "independently of be",
    "improved",
    "optimized",
]

GSIKO_KO_LINE = "YesCMS B2B 자금관리 웹 · 금융결제원 CMS 출금이체 연계"
GSIKO_KO_BULLET = (
    "금융결제원 CMS 출금이체 기반 출금·수납·원장 화면의 상태 관리, 검증, 재시도 처리를 FE에서 담당"
)
GSIKO_EN_LINE = "B2B finance admin and KFTC CMS direct debit"
GSIKO_EN_BULLET = (
    "Owned state, validation, and retry handling for withdrawal, collection, "
    "and ledger screens integrated with KFTC CMS direct debit"
)


class TextExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []
        self._skip = 0
        self._stack: list[str] = []
        self.header_text: list[str] = []
        self.about_text: list[str] = []
        self._in_header = 0
        self._in_about = 0
        self.bullets: list[str] = []
        self._bullet: list[str] | None = None

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        tag = tag.lower()
        self._stack.append(tag)
        if tag in {"script", "style"}:
            self._skip += 1
        if tag == "header":
            self._in_header += 1
        if tag == "li":
            self._bullet = []
        classes = dict(attrs).get("class") or ""
        if "summary" in classes.split():
            self._in_about += 1

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        if tag in {"script", "style"} and self._skip:
            self._skip -= 1
        if tag == "header" and self._in_header:
            self._in_header -= 1
        if tag == "li" and self._bullet is not None:
            text = re.sub(r"\s+", " ", "".join(self._bullet)).strip()
            if text:
                self.bullets.append(text)
            self._bullet = None
        if self._stack:
            # pop matching tag if present
            for i in range(len(self._stack) - 1, -1, -1):
                if self._stack[i] == tag:
                    # closing a summary-bearing element is handled via class on start only
                    del self._stack[i]
                    break
        if tag == "p" and self._in_about:
            self._in_about -= 1

    def handle_data(self, data: str) -> None:
        if self._skip:
            return
        self.parts.append(data)
        if self._in_header:
            self.header_text.append(data)
        if self._in_about:
            self.about_text.append(data)
        if self._bullet is not None:
            self._bullet.append(data)


def visible(html: str) -> TextExtractor:
    parser = TextExtractor()
    parser.feed(html)
    return parser


def has_token_300(text: str) -> bool:
    """Site-count 300. Does not match the phone fragment inside 2300."""
    if re.search(r"약\s*300|~\s*300|300\s*여|300\+", text):
        return True
    return re.search(r"(?<![0-9])300(?![0-9])", text) is not None


def check_bullet(bullet: str, lang: str) -> list[str]:
    """One fact per bullet. Lists stay. A second sentence does not."""
    del lang
    errors: list[str] = []
    if "—" in bullet or ";" in bullet:
        errors.append(f"bullet joins two clauses: {bullet}")
    # A period before more words is a second sentence. Lists use commas.
    if re.search(r"[.]\s+\S", bullet) or bullet.count("다. ") >= 1:
        errors.append(f"bullet has two sentences: {bullet}")
    # Comma-joined double clause: both sides carry their own verb ending.
    parts = [p.strip() for p in bullet.split(",")]
    if len(parts) >= 2:
        verb = re.compile(r"(다|함|했음|하고|하며)$")
        if verb.search(parts[0]) and any(verb.search(p) for p in parts[1:]):
            errors.append(f"comma-joined sentences: {bullet}")
    return errors


def check_page(path: Path) -> list[str]:
    html = path.read_text(encoding="utf-8")
    extracted = visible(html)
    text = re.sub(r"\s+", " ", "".join(extracted.parts))
    header = re.sub(r"\s+", " ", "".join(extracted.header_text))
    about = re.sub(r"\s+", " ", "".join(extracted.about_text))
    name = path.name
    lang = "en" if name.endswith("-en.html") else "ko"
    strict_no_side = name in {
        "kyuyeon-kim-ko.html",
        "kyuyeon-kim-fullstack-ko.html",
    }
    errors: list[str] = []

    if "—" in html:
        errors.append("em dash (—) present")
    if "payment.modetour.com" in html.lower():
        errors.append("payment.modetour.com separation claim")
    if has_token_300(text):
        errors.append('site count "300" / "약 300"')
    if re.search(r"오픈뱅킹|open banking", text, re.I):
        errors.append("Open Banking wording")
    if re.search(r"\bSEO\b|초기 로딩|로딩 성능|loading speed|initial load", text, re.I):
        errors.append("SEO or loading-speed claim")

    if lang == "ko":
        for word in KO_BANNED:
            if word in text:
                errors.append(f"banned KO: {word}")
        if "팀 6명" not in text:
            errors.append('missing "팀 6명"')
        if "570여" not in text:
            errors.append("missing 570여")
        if "2010.04" not in text or "2013.02" not in text:
            errors.append("education must be 2010.04 – 2013.02")
        if "인제고등학교" not in text or "이과" not in text:
            errors.append("education must name 인제고등학교 이과")
        if GSIKO_KO_LINE not in text:
            errors.append("GSIKO description line is not the agreed line")
        if GSIKO_KO_BULLET not in text:
            errors.append("GSIKO bullet is not the agreed bullet")
        if "010-2300-6059" not in text:
            errors.append("phone number changed")
    else:
        low = text.lower()
        for word in EN_BANNED:
            if word in low:
                errors.append(f"banned EN: {word}")
        if re.search(r"\b(fluent|native)\b", low):
            errors.append("English level marked fluent/native")
        if "part-time" in low or "contract" in low:
            errors.append('still says "Open to Part-time & Contract"')
        if "team of 6" not in low:
            errors.append('missing "team of 6"')
        if "570+" not in text:
            errors.append("missing 570+")
        if "Apr 2010" not in text or "Feb 2013" not in text:
            errors.append("education must be Apr 2010 – Feb 2013")
        if "Inje High School" not in text:
            errors.append("education must name Inje High School")
        if GSIKO_EN_LINE not in text:
            errors.append("GSIKO description line is not the agreed line")
        if GSIKO_EN_BULLET not in text:
            errors.append("GSIKO bullet is not the agreed bullet")
        if "+82 10-2300-6059" not in text:
            errors.append("phone number changed")
        if re.search(r"gateway|mesh", about, re.I):
            errors.append("About includes gateway/mesh; FE facts only")
        if "delete-horizon" in header.lower():
            errors.append("header shows delete-horizon.com")
        if "grangbelrlurain.github.io" not in header:
            errors.append("header missing grangbelrlurain.github.io")
        if "horizon-mesh (Experimental)" not in text:
            errors.append("mesh is not labeled horizon-mesh (Experimental)")

    if "lurain003@gmail.com" not in text:
        errors.append("email changed")
    if "1,490" not in text or "669" not in text:
        errors.append("headline numbers must include 1,490 and 669")
    if "Frontend Developer" not in text:
        errors.append('ShopFanPick title "Frontend Developer" missing')

    if strict_no_side:
        low_html = html.lower()
        for token in ("gateway", "mesh", "delete-horizon"):
            if token in low_html:
                errors.append(f"forbidden string on this page: {token}")
        if "grangbelrlurain.github.io" not in header:
            errors.append("header missing grangbelrlurain.github.io")
        if "delete-horizon" in header.lower():
            errors.append("header shows delete-horizon.com")

    if name == "kyuyeon-kim-agentic-ko.html":
        if "delete-horizon.com" not in header:
            errors.append("agentic header must keep delete-horizon.com")
        if "horizon-mesh (실험 중)" not in text:
            errors.append("mesh is not labeled horizon-mesh (실험 중)")
        # bare mesh outside the labeled form
        stripped = text.replace("horizon-mesh (실험 중)", "")
        if re.search(r"mesh", stripped, re.I):
            errors.append("unlabeled mesh")

    if name == "kyuyeon-kim-en.html":
        stripped = text.replace("horizon-mesh (Experimental)", "")
        if re.search(r"mesh", stripped, re.I):
            errors.append("unlabeled mesh")

    for bullet in extracted.bullets:
        errors.extend(check_bullet(bullet, lang))

    return errors


def main(argv: list[str]) -> int:
    pages = [Path(a) for a in argv[1:]] or DEFAULT_PAGES
    failed = 0
    for path in pages:
        if not path.exists():
            print(f"FAIL {path}: file not found")
            failed += 1
            continue
        errors = check_page(path)
        label = path.name
        if errors:
            failed += 1
            print(f"FAIL {label}")
            for err in errors:
                print(f"  - {err}")
        else:
            print(f"PASS {label}")
    print()
    if failed:
        print(f"{failed} page(s) failed")
        return 1
    print(f"all {len(pages)} pages pass")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
