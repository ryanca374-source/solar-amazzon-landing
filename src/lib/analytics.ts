import { appConfig } from '../config'

let initialized = false

export const initTrackers = () => {
  if (initialized) {
    return
  }

  if (appConfig.googleAnalyticsId && typeof window.gtag !== 'function') {
    window.dataLayer = window.dataLayer || []
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args)
    }

    window.gtag('js', new Date())
    window.gtag('config', appConfig.googleAnalyticsId)
  }

  if (appConfig.metaPixelId && typeof window.fbq !== 'function') {
    window.fbq = (...args: unknown[]) => {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(args)
    }

    window.fbq('init', appConfig.metaPixelId)
    window.fbq('track', 'PageView')
  }

  initialized = true
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
