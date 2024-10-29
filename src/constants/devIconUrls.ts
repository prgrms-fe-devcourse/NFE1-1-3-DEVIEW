import { DevDependencies } from "@customTypes/post";

type DevIconsDocs = {
  [key in DevDependencies]: {
    bgUrl: string;
    iconUrl: string;
  };
};

export const devIconsDocs: DevIconsDocs = {
  "C#": {
    bgUrl: "bg-[url(/assets/dev_bgIcons/C_sharp.svg)]",
    iconUrl: "bg-[url(/assets/dev_icons/C_sharp.svg)]"
  },
  "C++": {
    bgUrl: "bg-[url(/assets/dev_bgIcons/C++.svg)]",
    iconUrl: "bg-[url(/assets/dev_icons/C++.svg)]"
  },
  Css: {
    bgUrl: "bg-[url(/assets/dev_bgIcons/Css.svg)]",
    iconUrl: "bg-[url(/assets/dev_icons/Css.svg)]"
  },
  Git: {
    bgUrl: "bg-[url(/assets/dev_bgIcons/Git.svg)]",
    iconUrl: "bg-[url(/assets/dev_icons/Git.svg)]"
  },
  Go: {
    bgUrl: "bg-[url(/assets/dev_bgIcons/Go.svg)]",
    iconUrl: "bg-[url(/assets/dev_icons/Go.svg)]"
  },
  Html: {
    bgUrl: "bg-[url(/assets/dev_bgIcons/Html.svg)]",
    iconUrl: "bg-[url(/assets/dev_icons/Html.svg)]"
  },
  Java: {
    bgUrl: "bg-[url(/assets/dev_bgIcons/Java.svg)]",
    iconUrl: "bg-[url(/assets/dev_icons/Java.svg)]"
  },
  JavaScript: {
    bgUrl: "bg-[url(/assets/dev_bgIcons/JavaScript.svg)]",
    iconUrl: "bg-[url(/assets/dev_icons/JavaScript.svg)]"
  },
  NodeJs: {
    bgUrl: "bg-[url(/assets/dev_bgIcons/NodeJs.svg)]",
    iconUrl: "bg-[url(/assets/dev_icons/NodeJs.svg)]"
  },
  Php: {
    bgUrl: "bg-[url(/assets/dev_bgIcons/Php.svg)]",
    iconUrl: "bg-[url(/assets/dev_icons/Php.svg)]"
  },
  Python: {
    bgUrl: "bg-[url(/assets/dev_bgIcons/Python.svg)]",
    iconUrl: "bg-[url(/assets/dev_icons/Python.svg)]"
  },
  React: {
    bgUrl: "bg-[url(/assets/dev_bgIcons/React.svg)]",
    iconUrl: "bg-[url(/assets/dev_icons/React.svg)]"
  },
  Ruby: {
    bgUrl: "bg-[url(/assets/dev_bgIcons/Ruby.svg)]",
    iconUrl: "bg-[url(/assets/dev_icons/Ruby.svg)]"
  },
  Sass: {
    bgUrl: "bg-[url(/assets/dev_bgIcons/Sass.svg)]",
    iconUrl: "bg-[url(/assets/dev_icons/Sass.svg)]"
  }
};
