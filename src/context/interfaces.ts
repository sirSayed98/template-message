export interface TemplateContextType {
  templateName: string;
  language: string;
  // category: string;
  body: string;
  // header: {
  //   type: 'none' | 'text' | 'image';
  //   content?: string;
  //   imageUrl?: string;
  // };
  footer: string;
  // buttons: Array<{
  //   type: 'url' | 'phone';
  //   text: string;
  //   value: string;
  // }>;
  setTemplateName: (templateName: string) => void;
  setLanguage: (language: string) => void;
  setBody: (body: string) => void;
  setFooter: (footer: string) => void;
}

export interface TemplateStateType {
  templateName: string;
  language: string;
  body: string;
  footer: string;
}