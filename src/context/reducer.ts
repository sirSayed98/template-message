import type { TemplateStateType } from "./interfaces";
import { SET_TEMPLATE_NAME } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const templateReducer = (state: TemplateStateType, action: any) => {
  switch (action.type) {
    case SET_TEMPLATE_NAME:
      return { ...state, templateName: action.payload };
    default:
      return state;
  }
};