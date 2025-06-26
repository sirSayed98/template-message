import { useReducer } from "react";
import TemplateContext from "./context";
import { templateReducer } from "./reducer";
import { SET_TEMPLATE_NAME } from './types';

export const TemplateState = ({ children }: { children: React.ReactNode }) => {
  
  const [state, dispatch] = useReducer(templateReducer, {
    templateName: '',
  });

  const setTemplateName = (templateName: string) => {
    dispatch({ type: SET_TEMPLATE_NAME, payload: templateName });
  };

  return (
    <TemplateContext.Provider 
      value={{ 
        templateName: state.templateName,
        setTemplateName,
      }}>
      {children}
    </TemplateContext.Provider>
  );
};
