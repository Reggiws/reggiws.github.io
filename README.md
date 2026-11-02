# Reggiws 的数字花园

这个个人主页使用 [Quartz 5](https://quartz.jzhao.xyz/) 构建，计划通过 GitHub Pages 发布到 [reggiws.github.io](https://reggiws.github.io/)。

## 更新内容

- 首页、关于我、项目和笔记都在 `content/` 目录，直接编辑 Markdown 文件即可。
- 新文章放进 `content/笔记/`。文件名会成为网址的一部分。
- 网站标题、配色和功能在 `quartz.config.yaml` 中修改。

## 本地预览

需要 Node.js 22 及 npm 10.9.2 或更高版本。

```sh
npm ci
npx quartz plugin install
npx quartz build --serve
```

浏览器打开 `http://localhost:8080`。

## 发布

将此仓库设为 GitHub Pages 的来源：`Settings → Pages → Build and deployment → GitHub Actions`。之后每次推送到 `v5` 分支，`.github/workflows/deploy.yml` 都会自动构建并发布。

初始页面是占位版，请在公开分享前将个人介绍与项目内容换成真实资料。

Quartz 原项目采用 MIT 许可，详见 `LICENSE.txt`。
