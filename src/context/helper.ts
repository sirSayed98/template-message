/* eslint-disable @typescript-eslint/no-explicit-any */
import { isValidPhoneNumber, isValidURL } from '../utils/validation-helper';
import type { ButtonType, ErrorMsgsType, HeaderType, TemplateStateType } from './interfaces';

const TEMPLATE_NAME_CHAR_LIMIT = 20;

let errorMsgs: ErrorMsgsType = {} as ErrorMsgsType


const constructHeader = (header: HeaderType) => {
  if (header.format === 'image') {
    if(!header.value?.image){
      errorMsgs.headerImageError = 'Image is required'
      return null;
    }
     errorMsgs.headerImageError = '';
    return {
      type: 'HEADER',
      format: 'IMAGE',
      value: {
        url: header.value?.image?.preview,
      },
    }
  }
  if (header.format === 'text') {
    if(!header.value?.text){
      errorMsgs.headerTextError = 'Text is required'
      return null;
    }
    errorMsgs.headerTextError = '';
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
  errorMsgs.buttonTextError = []
  errorMsgs.buttonUrlError = []
  errorMsgs.buttonPhoneNumberError = []

  buttons.forEach((button: ButtonType, index: number) => {
    // validate button text
    if (!button.text) {
      isButtonsHasError = true
      errorMsgs.buttonTextError![index] = 'Text is required' 
    } else {
      errorMsgs.buttonTextError![index] = ''
    }
    
    // validate button url
    if (button.type === 'URL') {
      if(!button.value.url){
        isButtonsHasError = true
        errorMsgs.buttonUrlError![index] = 'URL is required'
      }
      else if (isValidURL(button.value.url)) {
        validButtons.push(button)
        errorMsgs.buttonUrlError![index] = ''
      } else {
        isButtonsHasError = true
        errorMsgs.buttonUrlError![index] = 'Invalid URL'
      }
    }

    // validate button phone number
    if (button.type === 'CALL') {
      if(!button.value.phone_number){
        isButtonsHasError = true
        errorMsgs.buttonPhoneNumberError![index] = 'Phone number is required'
      }
      else if (isValidPhoneNumber(button.value.phone_number)) {
        validButtons.push(button)
        errorMsgs.buttonPhoneNumberError![index] = ''
      } else {
        isButtonsHasError = true
        errorMsgs.buttonPhoneNumberError![index] = 'Invalid phone number'
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
  const structuredJSON: any = {}
  errorMsgs = {} as ErrorMsgsType

  if(!state.language){
    errorMsgs.languageError = 'Language is required'
  } else{
    errorMsgs.languageError = ''
    structuredJSON.language = state.language
  }
  
  if(!state.templateName){
    errorMsgs.templateNameError = 'Template name is required'
  } else if(state.templateName.length > TEMPLATE_NAME_CHAR_LIMIT){
    errorMsgs.templateNameError = `Template name must be less than ${TEMPLATE_NAME_CHAR_LIMIT} characters`
  } else {
    errorMsgs.templateNameError = ''
    structuredJSON.name = state.templateName
  }

  if(!state.category){
    errorMsgs.categoryError = 'Category is required'
  } else{
    errorMsgs.categoryError = ''
    structuredJSON.category = state.category
  }

  const components = []

  if (state.header.format !== 'none') {
    const header = constructHeader(state.header)
    if (header) {
      components.push(header)
    }
  }

  // required
  if (!state.body) {
    errorMsgs.bodyError = 'Body is required'
  } else {
    errorMsgs.bodyError = ''
    components.push({
      type: 'BODY',
      text: state.body,
    })
  }
  
  // optional
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

  return {
    structuredJSON,
    errorMsgs
  };
}
