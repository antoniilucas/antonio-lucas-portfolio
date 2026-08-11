import { useEffect, useRef, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/animations/variants'
import { siteConfig } from '@/data/config'

interface Line {
  type: 'input' | 'output'
  text: string
}

const HELP_TEXT = [
  'AVAILABLE COMMANDS:',
  '  whoami      display current identity',
  '  about       short bio',
  '  stack       core technologies',
  '  projects    scroll to selected work',
  '  contact     scroll to contact',
  '  clear       clear terminal',
]

function runCommand(raw: string): { output: string[]; scrollTo?: string } {
  const cmd = raw.trim().toLowerCase()

  switch (cmd) {
    case 'help':
      return { output: HELP_TEXT }
    case 'whoami':
      return { output: [siteConfig.name] }
    case 'about':
      return {
        output: [
          'Estudante de Ciência da Computação.',
          'Construo interfaces, APIs e sistemas web.',
        ],
      }
    case 'stack':
      return {
        output: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Laravel', 'PostgreSQL', 'Docker'],
        scrollTo: '#stack',
      }
    case 'projects':
      return { output: ['Redirecting to selected work...'], scrollTo: '#projects' }
    case 'contact':
      return { output: ['Opening contact channel...'], scrollTo: '#contact' }
    case 'clear':
      return { output: [] }
    case '':
      return { output: [] }
    default:
      return { output: [`command not found: ${cmd}`, 'type "help" for a list of commands'] }
  }
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', text: `Welcome to antonio@portfolio — type "help" to get started.` },
  ])
  const [value, setValue] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [lines])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const command = value

    if (command.trim().toLowerCase() === 'clear') {
      setLines([])
      setValue('')
      return
    }

    const { output, scrollTo } = runCommand(command)
    setLines((prev) => [
      ...prev,
      { type: 'input', text: command },
      ...output.map((text) => ({ type: 'output' as const, text })),
    ])
    setValue('')

    if (scrollTo) {
      window.setTimeout(() => {
        document.querySelector(scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    }
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="w-full border border-[var(--color-line)] bg-[var(--color-bg-raised)]"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center justify-between border-b border-[var(--color-line)] px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full border border-[var(--color-line)]" />
          <span className="h-2.5 w-2.5 rounded-full border border-[var(--color-line)]" />
          <span className="h-2.5 w-2.5 rounded-full border border-[var(--color-line)]" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-muted)]">
          antonio@portfolio: ~
        </span>
      </div>

      <div
        ref={scrollRef}
        className="h-64 sm:h-72 overflow-y-auto px-4 py-4 font-mono text-[12.5px] leading-relaxed sm:text-sm"
      >
        {lines.map((line, i) => (
          <div key={i} className={line.type === 'input' ? 'text-[var(--color-ink)]' : 'text-[var(--color-muted)]'}>
            {line.type === 'input' ? (
              <span>
                <span className="text-[var(--color-accent)]">antonio@portfolio:~$ </span>
                {line.text}
              </span>
            ) : (
              <span className="block whitespace-pre-wrap">{line.text}</span>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center border-t border-[var(--color-line)] px-4 py-3">
        <span className="font-mono text-sm text-[var(--color-accent)]" aria-hidden="true">
          antonio@portfolio:~$&nbsp;
        </span>
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          autoComplete="off"
          spellCheck={false}
          aria-label="Terminal command input"
          placeholder="type a command..."
          className="flex-1 bg-transparent font-mono text-sm text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)]/50"
        />
      </form>
    </motion.div>
  )
}
