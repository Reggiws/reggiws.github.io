import { QuartzComponent } from "./types"

const SiteNavigation: QuartzComponent = ({ fileData }) => {
  const slug = fileData.slug ?? "index"
  const links = [
    { href: "/", label: "Home", active: slug === "index" },
    { href: "/photos/", label: "Photos", active: slug === "photos/index" },
    { href: "/photos/2026", label: "2026 collections", active: slug === "photos/2026" },
    { href: "/photos/2025", label: "2025 collections", active: slug === "photos/2025" },
  ]

  return (
    <nav class="site-navigation" aria-label="Main navigation">
      {links.map(({ href, label, active }) => (
        <a key={href} href={href} class="internal" aria-current={active ? "page" : undefined}>
          {label}
        </a>
      ))}
    </nav>
  )
}

export default SiteNavigation
