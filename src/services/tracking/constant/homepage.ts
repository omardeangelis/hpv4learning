export const homePageEvents = {
  home_hero_contact: `home_hero_contact` as const,
  home_hero_card_click: `home_hero_card_click` as const,
  home_explore_econ: `home_explore_econ` as const,
  home_explore_academy: `home_explore_academy` as const,
  home_explore_courses: `home_explore_courses` as const,
  "home_explore_web-agency": `home_explore_web-agency` as const,
  home_footer_click: `home_footer_click` as const,
}

export type HomePageEvents =
  (typeof homePageEvents)[keyof typeof homePageEvents]
