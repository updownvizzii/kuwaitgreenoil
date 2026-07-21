import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
  type AnchorHTMLAttributes,
} from 'react'
import { PixelTransition } from '../components/PixelTransition'

interface RouterCtx {
  path: string
  navigate: (to: string) => void
}

const Ctx = createContext<RouterCtx>({ path: '/', navigate: () => {} })

export function useRouter() {
  return useContext(Ctx)
}

/**
 * Minimal client-side router with an elegant pixel-dissolve transition between pages.
 * (No brand video on navigation — that only plays once per session via the Preloader.)
 */
export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(
    () => (typeof window !== 'undefined' ? window.location.pathname || '/' : '/')
  )
  const [phase, setPhase] = useState<'idle' | 'cover' | 'reveal'>('idle')
  const busyRef = useRef(false)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || '/')
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to: string) => {
    if (busyRef.current || to === window.location.pathname) return
    busyRef.current = true

    setPhase('cover')

    // Swap the route once the mosaic has fully covered the screen
    window.setTimeout(() => {
      window.history.pushState({}, '', to)
      setPath(to)
      window.scrollTo(0, 0)
      setPhase('reveal')
    }, 420)

    // Reset once the mosaic has dissolved away
    window.setTimeout(() => {
      setPhase('idle')
      busyRef.current = false
    }, 1120)
  }, [])

  return (
    <Ctx.Provider value={{ path, navigate }}>
      {children}
      <PixelTransition phase={phase} />
    </Ctx.Provider>
  )
}

/** Anchor that routes through the transition instead of a full page load.
 *  Forwards standard anchor props (style, aria-*, data-*, …). */
type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> & {
  to: string
  onClick?: () => void
}

export function Link({ to, children, className, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter()
  return (
    <a
      href={to}
      className={className}
      {...rest}
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
        navigate(to)
      }}
    >
      {children}
    </a>
  )
}
