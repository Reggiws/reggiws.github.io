import { QuartzComponent } from "./types"

const SiteFooter: QuartzComponent = ({ fileData }) => (
  <footer class="site-footer">
    <div class="footer-line">
      <span>© {new Date().getFullYear()} Reggiws</span>
      <nav aria-label="Contact links">
        <a href="https://github.com/Reggiws">GitHub</a>
        <a href="mailto:chensiwei26@mails.ucas.ac.cn">Email</a>
      </nav>
    </div>
    {fileData.slug === "index" && (
      <p class="quiet-note" lang="zh-CN">
        我需要你，你在地球上的时候可以拥有我。保持警惕，我爱你。
      </p>
    )}
  </footer>
)

export default SiteFooter
