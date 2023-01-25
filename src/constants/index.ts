export const isProduction = process.env.NODE_ENV === `production`
export const isStaging = process.env.NODE_ENV === `staging`
export const isDevelopment = !isProduction && !isStaging
