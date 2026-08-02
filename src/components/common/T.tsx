import type { LocaleText } from '../../data/types'
import { useUiPrefs } from '../../contexts/UiPrefsContext'

/** Renders locale text; supports simple HTML tags used in content (<strong>, <code>). */
export function T({ text, as: Tag = 'span', className }: {
  text: LocaleText
  as?: keyof HTMLElementTagNameMap
  className?: string
}) {
  const { t } = useUiPrefs()
  const html = t(text)
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
