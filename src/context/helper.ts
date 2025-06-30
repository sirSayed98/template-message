/* eslint-disable @typescript-eslint/no-explicit-any */
import { isValidPhoneNumber, isValidURL } from '../utils/validation-helper'
import type { ButtonType, HeaderType, TemplateStateType } from './interfaces'
const constructHeader = (header: HeaderType) => {
  if (header.format === 'image') {
    return {
      type: 'HEADER',
      format: 'IMAGE',
      value: {
        url: header.value?.image?.preview,
      },
    }
  }
  if (header.format === 'text') {
    return {
      type: 'HEADER',
      format: 'TEXT',
      value: {
        text: header.value?.text,
      },
    }
  }
}

const constructButtons = (buttons: ButtonType[]) => {
 
  let isButtonsHasError = false
  const validButtons: ButtonType[] = [];

  buttons.forEach((button: ButtonType) => {
    if (!button.text) {
      isButtonsHasError = true
      return
    }

    if (button.text && button.type === 'URL' && button.value.url) {
      if (isValidURL(button.value.url)) {
        validButtons.push(button)
        return
      } else {
        isButtonsHasError = true
        return
      }
    }

    if (button.text && button.type === 'CALL' && button.value.phone_number) {
      if (isValidPhoneNumber(button.value.phone_number)) {
        validButtons.push(button)
        return
      } else {
        isButtonsHasError = true
        return
      }
    }
  })

  if (!isButtonsHasError) {
    return {
      type: 'BUTTONS',
      buttons: validButtons,
    }
  }
}

export const constructStructuredJSON = (state: TemplateStateType) : any  => {
  const structuredJSON: any = {
    language: state.language,
    name: state.templateName,
    category: state.category,
  }

  const components = []

  if (state.header.format !== 'none') {
    const header = constructHeader(state.header)
    if (header) {
      components.push(header)
    }
  }

  if (state.body) {
    components.push({
      type: 'BODY',
      text: state.body,
    })
  }

  if (state.footer) {
    components.push({
      type: 'FOOTER',
      text: state.footer,
    })
  }

  if (state.buttons.length > 0) {
    const buttons = constructButtons(state.buttons)
   
    if (buttons) {
      components.push(buttons)
    }
  }

  if (components.length > 0) {
    structuredJSON.components = components
  }

  return structuredJSON;
}
