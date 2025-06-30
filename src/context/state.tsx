import { useReducer } from 'react'
import TemplateContext from './context'
import type { ButtonType, HeaderType } from './interfaces'
import { templateReducer } from './reducer'
import {
  SET_BODY,
  SET_BUTTONS,
  SET_CATEGORY,
  SET_ERROR_MSGS,
  SET_FOOTER,
  SET_HEADER,
  SET_LANGUAGE,
  SET_TEMPLATE_NAME,
} from './types'
import { constructStructuredJSON } from './helper'

export const TemplateState = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(templateReducer, {
    templateName: '',
    body: '',
    footer: '',
    language: '',
    category: '',
    header: {
      format: 'none',
    },
    errorMsgs: {
      languageError: '',
      templateNameError: '',
      categoryError: '',
      bodyError: '',
      headerImageError: '',
      headerTextError: '',
      buttonTextError: [],
      buttonUrlError: [],
      buttonPhoneNumberError: [],
    },
    buttons: [],
  })

  const setTemplateName = (templateName: string) => {
    dispatch({ type: SET_TEMPLATE_NAME, payload: templateName })
  }

  const setBody = (body: string) => {
    dispatch({ type: SET_BODY, payload: body })
  }

  const setFooter = (footer: string) => {
    dispatch({ type: SET_FOOTER, payload: footer })
  }

  const setLanguage = (language: string) => {
    dispatch({ type: SET_LANGUAGE, payload: language })
  }

  const setCategory = (category: string) => {
    dispatch({ type: SET_CATEGORY, payload: category })
  }

  const setHeader = (header: HeaderType) => {
    dispatch({ type: SET_HEADER, payload: header })
  }

  const setButtons = (buttons: Array<ButtonType>) => {
    dispatch({ type: SET_BUTTONS, payload: buttons })
  }

  const getStructuredJSON = () =>{
    const { structuredJSON, errorMsgs } = constructStructuredJSON(state)
    dispatch({ type: SET_ERROR_MSGS, payload: errorMsgs })
    console.log(structuredJSON)
    // TODO: send structuredJSON to backend
  }

  return (
    <TemplateContext.Provider
      value={{
        templateName: state.templateName,
        language: state.language,
        body: state.body,
        footer: state.footer,
        category: state.category,
        header: state.header,
        buttons: state.buttons,
        errorMsgs: state.errorMsgs,
        setTemplateName,
        setBody,
        setFooter,
        setLanguage,
        setCategory,
        setHeader,
        setButtons,
        getStructuredJSON,
      }}
    >
      {children}
    </TemplateContext.Provider>
  )
}
