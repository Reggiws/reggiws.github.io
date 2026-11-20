import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import SiteNavigation from "./quartz/components/SiteNavigation"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

for (const pageLayout of [layout.defaults, ...Object.values(layout.byPageType)]) {
  if (pageLayout.left?.length) {
    pageLayout.left = [pageLayout.left[0], SiteNavigation, ...pageLayout.left.slice(1)]
  }
}

config.plugins.emitters = config.plugins.emitters.map((emitter) =>
  emitter.name === "PageTypeDispatcher" ? PageTypeDispatcher(layout) : emitter,
)
