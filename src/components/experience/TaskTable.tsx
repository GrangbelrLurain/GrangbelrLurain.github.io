import type { TaskItem } from '../../data/types'
import { useUiPrefs } from '../../contexts/UiPrefsContext'
import { T } from '../common/T'

export function TaskRow({ task }: { task: TaskItem }) {
  const { filter, t } = useUiPrefs()
  if (filter !== 'all' && filter !== task.category) return null

  return (
    <li className="task-item" data-category={task.category}>
      <span className="task-label">{t(task.badge)}</span>
      <div className="task-body">
        <strong>{t(task.title)}</strong>
        <span className="task-sep"> — </span>
        <T text={task.description} as="span" />
      </div>
    </li>
  )
}

export function TaskTable({ tasks }: { tasks: TaskItem[] }) {
  const { filter } = useUiPrefs()
  const visible = filter === 'all' ? tasks : tasks.filter((task) => task.category === filter)
  if (visible.length === 0) return null

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskRow key={`${task.category}-${task.title.kr}`} task={task} />
      ))}
    </ul>
  )
}
