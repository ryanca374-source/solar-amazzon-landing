import { appConfig } from '../config'

let gaInitialized = false
let metaInitialized = false

export const initTrackers = () => {
  if (!gaInitialized && appConfig.googleAnalyticsId) {
    if (typeof window.gtag !== 'function') {
      const gaScript = document.createElement('script')
      gaScript.async = true
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${appConfig.googleAnalyticsId}`
      document.head.appendChild(gaScript)

      window.dataLayer = window.dataLayer || []
      window.gtag = (...args: unknown[]) => {
        window.dataLayer?.push(args)
      }
    }

    window.gtag('js', new Date())
    window.gtag('config', appConfig.googleAnalyticsId)
    gaInitialized = true
  }

  if (!metaInitialized && appConfig.metaPixelId) {
    if (typeof window.fbq !== 'function') {
      type FbqInitFn = ((...args: unknown[]) => void) & {
        callMethod?: (...args: unknown[]) => void
        push?: (...args: unknown[]) => void
        loaded?: boolean
        version?: string
        queue?: unknown[][]
      }
      const fbq: FbqInitFn = (...args: unknown[]) => {
        if (fbq.callMethod) {
          fbq.callMethod(...args)
          return
        }
        fbq.queue = fbq.queue || []
        fbq.queue.push(args)
      }
      fbq.push = (...args: unknown[]) => fbq(...args)
      fbq.loaded = true
      fbq.version = '2.0'
      fbq.queue = []
      window.fbq = fbq

      const metaScript = document.createElement('script')
      metaScript.async = true
      metaScript.src = 'https://connect.facebook.net/en_US/fbevents.js'
      document.head.appendChild(metaScript)
    }

    window.fbq('init', appConfig.metaPixelId)
    window.fbq('track', 'PageView')
    metaInitialized = true
  }
}

export const trackEvent = (
  eventName: string,
  payload: Record<string, unknown> = {},
) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload)
  }

  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, payload)
  }
}
