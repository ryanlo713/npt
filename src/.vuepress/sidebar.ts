import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "实践与理论",
      icon: "fas fa-book-open",
      prefix: "docs/",
      children: [
        "00",
        "01",
      ],
    },
    {
      text: "语音学宝库",
      icon: "fas fa-person-chalkboard",
      prefix: "docs/",
      children: [
        "07",
        "08",
      ],
    },
  ],
});
