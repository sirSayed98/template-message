import type { TemplateStateType } from './interfaces'
import {
  SET_BODY,
  SET_BUTTONS,
  SET_CATEGORY,
  SET_FOOTER,
  SET_HEADER,
  SET_LANGUAGE,
  SET_TEMPLATE_NAME,
  SET_ERROR_MSGS,
} from './types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const templateReducer = (state: TemplateStateType, action: any) => {
  switch (action.type) {
    case SET_TEMPLATE_NAME:
      return { ...state, templateName: action.payload }
    case SET_BODY:
      return { ...state, body: action.payload }
    case SET_FOOTER:
      return { ...state, footer: action.payload }
    case SET_LANGUAGE:
      return { ...state, language: action.payload }
    case SET_CATEGORY:
      return { ...state, category: action.payload }
    case SET_HEADER:
      return { ...state, header: action.payload }
    case SET_BUTTONS:
      return { ...state, buttons: action.payload }
    case SET_ERROR_MSGS:
      return { ...state, errorMsgs: action.payload }
    default:
      return state
  }
}
