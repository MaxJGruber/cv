import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { discoverContent, discoverThemes, discoverPlugins, discoverCustoms, discoverCustomCss, VariantTabs } from "cv-pdf-gen";
import "./tailwind.css"; 
import "cv-pdf-gen/styles";

const contentModules = import.meta.glob("/content/*.yaml", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const cssModules = import.meta.glob("/themes/*.css", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const layoutModules = import.meta.glob("/themes/*.layout.yaml", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const svgModules = import.meta.glob("/decorations/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const pluginModules = import.meta.glob("/plugins/*/index.tsx", {
  import: "default",
  eager: true,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as Record<string, any>;

const customModules = import.meta.glob("/custom/*.tsx", {
  import: "default",
  eager: true,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as Record<string, any>;

const customCssModules = import.meta.glob("/custom/*.css", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const contentMap = discoverContent(contentModules);
const themes = discoverThemes(cssModules, layoutModules, svgModules);
const plugins = discoverPlugins(pluginModules);
const customs = discoverCustoms(customModules);
const customCss = discoverCustomCss(customCssModules);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VariantTabs contentMap={contentMap} themes={themes} plugins={plugins} customs={customs} customCss={customCss} />
  </StrictMode>
);
