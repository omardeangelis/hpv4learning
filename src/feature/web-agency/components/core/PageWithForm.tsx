import React from "react"
import { ContactForm } from "./ContactForm"
import { ContactFormProvider } from "../../context/FormContext"

export const PageWithForm = ({ children }: { children: React.ReactNode }) => (
  <ContactFormProvider>
    <ContactForm />
    {children}
  </ContactFormProvider>
)
