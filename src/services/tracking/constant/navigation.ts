export const navigationEvents = {
  navigation_cta_click: `navigation_cta_click` as const,
  navigation_academy_click: `navigation_academy_click` as const,
  navigation_agency_click: `navigation_agency_click` as const,
}

export type NavigationEvents =
  (typeof navigationEvents)[keyof typeof navigationEvents]
