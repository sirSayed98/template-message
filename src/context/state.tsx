import { useReducer } from "react";
import TemplateContext from "./context";
import { templateReducer } from "./reducer";
import { SET_BODY, SET_FOOTER, SET_LANGUAGE, SET_TEMPLATE_NAME } from './types';

export const TemplateState = ({ children }: { children: React.ReactNode }) => {
  
  const [state, dispatch] = useReducer(templateReducer, {
    templateName: '',
    body: '',
    footer: '',
    language: '',
  });

  const setTemplateName = (templateName: string) => {
    dispatch({ type: SET_TEMPLATE_NAME, payload: templateName });
  };

  const setBody = (body: string) => {
    dispatch({ type: SET_BODY, payload: body });
  };

  const setFooter = (footer: string) => {
    dispatch({ type: SET_FOOTER, payload: footer });
  };

  const setLanguage = (language: string) => {
    dispatch({ type: SET_LANGUAGE, payload: language });
  };

  return (
    <TemplateContext.Provider 
      value={{ 
        templateName: state.templateName,
        language: state.language,
        body: state.body,
        footer: state.footer,
        setTemplateName,
        setBody,
        setFooter,
        setLanguage,
      }}>
      {children}
    </TemplateContext.Provider>
  );
};
