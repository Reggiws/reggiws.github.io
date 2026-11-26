import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import SiteFooter from "./quartz/components/SiteFooter"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

for (const pageLayout of [layout.defaults, ...Object.values(layout.byPageType)]) {
  pageLayout.right = []
  if (pageLayout.footer?.length) {
    pageLayout.footer = [SiteFooter]
  }
}

config.plugins.emitters = config.plugins.emitters.map((emitter) =>
  emitter.name === "PageTypeDispatcher" ? PageTypeDispatcher(layout) : emitter,
)
