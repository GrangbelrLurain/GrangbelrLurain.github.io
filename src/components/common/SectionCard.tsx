import type { ReactNode } from 'react'

export function SectionCard({
  id,
  title,
  children,
}: {
  id?: string
  title: ReactNode
  children: ReactNode
}) {
  return (
    <section className="section" id={id}>
      <h2 className="sec-title">{title}</h2>
      {children}
    </section>
  )
}
