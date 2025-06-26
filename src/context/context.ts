import { createContext } from "react";
import type { TemplateContextType } from "./interfaces";

const TemplateContext = createContext<TemplateContextType | null>(null);

export default TemplateContext;