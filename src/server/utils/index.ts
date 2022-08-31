import { mailValidationRegex } from "../constants";

export function isValidMail(email: string) {
  return String(email).toLowerCase().match(mailValidationRegex);
}
