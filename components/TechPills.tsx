export function TechPills({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <li
          key={tech}
          className="text-xs rounded-full border px-2 py-1 bg-white/60 dark:bg-white/10"
        >
          {tech}
        </li>
      ))}
    </ul>
  )
}
