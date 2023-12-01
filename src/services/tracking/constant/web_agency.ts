export const webAgencyHomeEvents = {
  agency_hero_click: `agency_hero_click` as const,
  agency_service_view: `agency_service_view` as const,
  agency_service_contact: `agency_service_contact` as const,
  agency_method: `agency_method` as const,
  agency_feature_click: `agency_feature_click` as const,
  agency_footer_click: `agency_footer_click` as const,
}

export const sitiEconomiciEvents = {
  agency_econ_hero_click: `agency_econ_hero_click` as const,
  agency_econ_pillolone_click: `agency_econ_pillolone_click` as const,
  agency_econ_footer_click: `agency_econ_footer_click` as const,
}

export const agencyContactModalEvents = {
  agency_modal_open: `agency_modal_open` as const,
  agency_modal_contact: `agency_modal_contact` as const,
}

export const webAgencyEvents = {
  ...webAgencyHomeEvents,
  ...sitiEconomiciEvents,
  ...agencyContactModalEvents,
}

export type WebAgencyEvents =
  (typeof webAgencyEvents)[keyof typeof webAgencyEvents]
