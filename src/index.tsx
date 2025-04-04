import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodoEmpty } from "./screens/TodoEmpty";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <TodoEmpty />
  </StrictMode>,
);
