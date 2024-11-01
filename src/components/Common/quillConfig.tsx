import hljs from "highlight.js";
import "highlight.js/styles/xcode.css";

hljs.configure({
  languages: ["javascript", "ruby", "python", "java", "cpp", "kotlin", "sql"]
});

export const modules = {
  syntax: {
    highlight: (text: any) => hljs.highlightAuto(text).value
  },
  toolbar: false
};
export const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "color",
  "background"
];
