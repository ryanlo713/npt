import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from 'vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  bundler: viteBundler(),

  base: "/npt/",

  lang: "zh-CN",
  title: "NPT汉译",
  description: "NPT的中文翻译",

  theme,

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
