import { cloneElement } from "preact"
import { QuartzComponent } from "./types"

export default function withQuietNote(Footer: QuartzComponent): QuartzComponent {
  const FooterWithNote: QuartzComponent = (props) => {
    const footer = Footer(props)
    if (props.fileData.slug !== "index") return footer
    return cloneElement(footer, {}, footer.props.children, (
      <p class="quiet-note" lang="zh-CN">
        我需要你，你在地球上的时候可以拥有我。保持警惕，我爱你。
      </p>
    ))
  }
  return Object.assign(FooterWithNote, Footer)
}
