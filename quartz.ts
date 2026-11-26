import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import withQuietNote from "./quartz/components/QuietNote"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

for (const pageLayout of [layout.defaults, ...Object.values(layout.byPageType)]) {
  if (pageLayout.footer?.length) {
    pageLayout.footer = pageLayout.footer.map(withQuietNote)
  }
}

config.plugins.emitters = config.plugins.emitters.map((emitter) =>
  emitter.name === "PageTypeDispatcher" ? PageTypeDispatcher(layout) : emitter,
)
