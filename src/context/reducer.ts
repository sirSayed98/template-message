import type { TemplateStateType } from "./interfaces";
import { SET_BODY, SET_CATEGORY, SET_FOOTER, SET_LANGUAGE, SET_TEMPLATE_NAME } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const templateReducer = (state: TemplateStateType, action: any) => {
  switch (action.type) {
    case SET_TEMPLATE_NAME:
      return { ...state, templateName: action.payload };
    case SET_BODY:
      return { ...state, body: action.payload };
    case SET_FOOTER:
      return { ...state, footer: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};