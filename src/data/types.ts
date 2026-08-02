export type Lang = 'kr' | 'en'

export type LocaleText = {
  kr: string
  en: string
}

export type TaskCategory = 'nextgen' | 'arch' | 'refac' | 'ui' | 'infra' | 'ops'

export type BadgeVariant = TaskCategory

export type TaskItem = {
  category: TaskCategory
  badge: LocaleText & { variant: BadgeVariant }
  /** Title + description rendered as "title — description" */
  title: LocaleText
  description: LocaleText
}

export type TaskGroup = {
  heading: LocaleText
  tasks: TaskItem[]
}

export type Company = {
  id: string
  name: LocaleText
  badge: LocaleText
  date: string
  subtitle: LocaleText
  /** 회사당 임팩트 요약 (상세 불릿 위에 먼저 읽히는 블록) */
  impacts: LocaleText[]
  /** Grouped tasks (YRISM). If omitted, flat `tasks` is used. */
  groups?: TaskGroup[]
  tasks?: TaskItem[]
  tech: string[]
  links?: { label: string; href: string }[]
}

export type Project = {
  id: string
  name: string
  techLine: string
  links: { label: string; href: string }[]
  bullets: LocaleText[]
  footerUrls?: { label: string; href: string }[]
}

export type SkillRow = {
  label: string
  tags: string[]
}

export type Metric = {
  value: string
  label: LocaleText
}
