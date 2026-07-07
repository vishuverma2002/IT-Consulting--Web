// This project is JavaScript (not TypeScript), so the `types/` folder holds
// JSDoc `@typedef` definitions instead of `.ts` interfaces. These give editors
// autocomplete + type-checking via JSDoc while keeping the runtime in plain JS.
// If the project later migrates to TypeScript, these typedefs map 1:1 to interfaces.

/**
 * @typedef {Object} Consultant
 * @property {string} id
 * @property {string} name
 * @property {string} title
 * @property {string} avatarUrl
 * @property {string[]} expertise
 * @property {string} bio
 */

/**
 * @typedef {Object} Client
 * @property {string} id
 * @property {string} name
 * @property {string} industry
 * @property {"active"|"prospect"|"archived"} status
 * @property {string} primaryContact
 */

/**
 * @typedef {Object} Appointment
 * @property {string} id
 * @property {string} clientId
 * @property {string} title
 * @property {string} startsAt - ISO date string
 * @property {number} durationMinutes
 * @property {"scheduled"|"completed"|"cancelled"} status
 */

/**
 * @typedef {Object} AnalyticsMetric
 * @property {string} id
 * @property {string} label
 * @property {string|number} value
 * @property {number} [deltaPct]
 */

/**
 * @typedef {Object} ClientCompany
 * @property {string} id
 * @property {string} name
 * @property {string} website
 * @property {string} logoSrc - Local path to the company logo asset
 */

/**
 * @typedef {Object} ServiceFeature
 * @property {string} title
 * @property {string} [subtitle]
 * @property {string} description
 */

/**
 * @typedef {Object} ServiceFeaturesSection
 * @property {string} badge
 * @property {string} title
 * @property {string} lead
 */

/**
 * @typedef {Object} ServiceFaq
 * @property {string} id
 * @property {string} question
 * @property {string} answer
 */

/**
 * @typedef {Object} ServiceProcessStep
 * @property {string} id
 * @property {string} title
 * @property {string} description
 */

/**
 * @typedef {Object} ServiceOffering
 * @property {string} slug
 * @property {string} title
 * @property {string} menuDescription
 * @property {"web"|"java"|"wordpress"} icon
 * @property {{ eyebrow: string, title: string, lead: string }} hero
 * @property {ServiceFeaturesSection} [featuresSection]
 * @property {ServiceFeature[]} features
 * @property {ServiceProcessStep[]} [processSteps]
 * @property {ServiceFaq[]} faqs
 */

/**
 * @typedef {Object} ProcessRoadmapStep
 * @property {string} id
 * @property {string} step
 * @property {string} title
 * @property {string} benefit
 */

/**
 * @typedef {Object} ProcessBenefit
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {"transparency"|"scalability"|"expertise"} icon
 */

/**
 * @typedef {Object} CaseStudyMetric
 * @property {string} value
 * @property {string} label
 * @property {string} caption
 */

/**
 * @typedef {Object} CaseStudyTestimonial
 * @property {string} tag
 * @property {string} headline
 * @property {string} quote
 * @property {string} initials
 * @property {string} authorName
 * @property {string} authorRole
 */

/**
 * @typedef {Object} CaseStudy
 * @property {string} id
 * @property {"web"|"java"|"wordpress"} filter
 * @property {string} categoryBadge
 * @property {string[]} techTags
 * @property {string} title
 * @property {string} clientBenefit
 * @property {string} challenge
 * @property {string} solution
 * @property {string} teaser
 * @property {string} cardCta
 * @property {CaseStudyTestimonial} testimonial
 * @property {CaseStudyMetric[]} metrics
 */

/**
 * @typedef {Object} WorkShowcaseStat
 * @property {string} label
 * @property {string} value
 */

/**
 * @typedef {Object} WorkShowcaseItem
 * @property {string} id
 * @property {string} badge
 * @property {"blue"|"indigo"|"green"|"orange"|"purple"} badgeTone
 * @property {string} title
 * @property {string} description
 * @property {string} image
 * @property {string} imageAlt
 * @property {WorkShowcaseStat[]} stats
 * @property {{ label: string, href: string }} cta
 */

/**
 * @typedef {Object} TopicPageStat
 * @property {string} value
 * @property {string} label
 */

/**
 * @typedef {Object} TopicPage
 * @property {string} slug
 * @property {string} title
 * @property {string} menuDescription
 * @property {{ eyebrow: string, title: string, lead: string }} hero
 * @property {ServiceFeature[]} features
 * @property {TopicPageStat[]} [stats]
 * @property {ServiceFaq[]} faqs
 */

/**
 * @typedef {Object} BlogPost
 * @property {string} slug
 * @property {string} title
 * @property {string} excerpt
 * @property {string} category
 * @property {string} readTime
 * @property {string} date
 */

// Re-exported as an empty object so this module can be imported as a namespace
// without a "module has no exports" warning in some toolchains.
export {};
