/**
 * GTM DataLayer Push Utilities
 * 
 * Use these functions to push custom events to Google Tag Manager.
 * Events will appear in GTM under Variables > Data Layer Variable.
 */

// Declare dataLayer type for TypeScript
declare global {
    interface Window {
        dataLayer: Record<string, any>[];
    }
}

/**
 * Push a custom event to the dataLayer
 */
export function trackEvent(eventName: string, eventData: Record<string, any> = {}) {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...eventData
        });
    }
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(ctaName: string, ctaLocation: string) {
    trackEvent('cta_click', {
        cta_name: ctaName,
        cta_location: ctaLocation
    });
}

/**
 * Track newsletter signup attempts
 */
export function trackNewsletterSignup(topic: string = 'general') {
    trackEvent('newsletter_signup', {
        newsletter_topic: topic
    });
}

/**
 * Track service page views with more context
 */
export function trackServiceView(serviceName: string) {
    trackEvent('service_view', {
        service_name: serviceName
    });
}

/**
 * Track blog article reads
 */
export function trackArticleRead(articleTitle: string, articleCategory: string) {
    trackEvent('article_read', {
        article_title: articleTitle,
        article_category: articleCategory
    });
}

/**
 * Track scroll depth milestones
 */
export function trackScrollDepth(percentage: number) {
    trackEvent('scroll_depth', {
        scroll_percentage: percentage
    });
}
