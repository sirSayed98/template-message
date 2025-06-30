export interface ImageFile {
  file: File
  preview: string
}
export interface HeaderType {
  format: 'none' | 'text' | 'image'
  value?: {
    text?: string
    image?: ImageFile
  }
}
export interface ButtonType {
  type: 'URL' | 'CALL'
  text: string
  value: {
    url?: string
    phone_number?: string
  }
}
export interface ErrorMsgsType {
  languageError: string
  templateNameError: string
  categoryError?: string
  bodyError?: string
  headerImageError?: string
  headerTextError?: string
  buttonTextError?: string[]
  buttonUrlError?: string []
  buttonPhoneNumberError?: string []
}
export interface TemplateContextType {
  templateName: string
  language: string
  category: string
  body: string
  header: HeaderType
  footer: string
  buttons: Array<ButtonType>
  errorMsgs: ErrorMsgsType
  setTemplateName: (templateName: string) => void
  setLanguage: (language: string) => void
  setBody: (body: string) => void
  setFooter: (footer: string) => void
  setCategory: (category: string) => void
  setHeader: (header: HeaderType) => void
  setButtons: (buttons: Array<ButtonType>) => void
  getStructuredJSON: () => void
}

export interface TemplateStateType {
  templateName: string
  language: string
  category: string
  body: string
  footer: string
  header: HeaderType
  buttons: Array<ButtonType>
  errorMsgs: ErrorMsgsType
}
