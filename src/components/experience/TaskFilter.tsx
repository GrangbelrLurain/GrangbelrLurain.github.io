import { filterOptions } from '../../data/profile'
import { useUiPrefs } from '../../contexts/UiPrefsContext'
import type { TaskCategory } from '../../data/types'

export function TaskFilter() {
  const { filter, setFilter, t, lang } = useUiPrefs()

  return (
    <aside className="experience-filter-rail" aria-label={lang === 'kr' ? '업무 필터' : 'Work filter'}>
      <p className="filter-rail-label">{lang === 'kr' ? '보기' : 'View'}</p>
      <div className="filter-rail-list" role="toolbar">
        {filterOptions.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className={`filter-rail-btn${filter === opt.id ? ' active' : ''}`}
            onClick={() => setFilter(opt.id as 'all' | TaskCategory)}
            aria-pressed={filter === opt.id}
          >
            {t(opt.label)}
          </button>
        ))}
      </div>
    </aside>
  )
}
