import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";

import { notice, error } from "@pnotify/core";

export function onNotice() {
  notice({
    text: "Too many matches found. Please enter a more specific query!",
    delay: 2000,
  });
}
export function onError() {
  error({
    text: "Nothing found. Change your query.",
    delay: 2000,
  });
}
