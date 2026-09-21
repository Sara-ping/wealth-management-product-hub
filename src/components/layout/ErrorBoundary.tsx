import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface State {
  error: Error | null
}

/**
 * Prevents a single render error from blanking the whole site.
 * Any crash is surfaced in the UI instead of leaving a white page.
 */
export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  render() {
    const { error } = this.state
    if (!error) return this.props.children

    return (
      <div className="shell py-24">
        <div className="mx-auto max-w-2xl rounded-[4px] border border-line bg-white p-8">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
            Error
          </p>
          <h1 className="mt-3 text-2xl text-navy-900">
            Something went wrong rendering this page
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            页面渲染时发生错误，已被捕获以避免整个站点白屏。
          </p>
          <pre className="mt-5 overflow-x-auto rounded-[3px] border border-line bg-navy-950 p-4 font-mono text-[0.72rem] leading-relaxed text-white/75">
            {error.message}
          </pre>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => this.setState({ error: null })}
              className="rounded-[3px] bg-navy-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-800"
            >
              Try again / 重试
            </button>
            <Link
              to="/"
              className="rounded-[3px] border border-line-strong px-5 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-navy-900"
            >
              Back to home / 返回首页
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
