import { useContext } from 'react';
import TemplateContext from './context';

export const useTemplate = () => {
  const context = useContext(TemplateContext);
  
  if (!context) {
    throw new Error('useTemplate must be used within a TemplateState provider');
  }
  
  return context;
};