import { SiBluesky, SiX, SiFacebook, SiWhatsapp, SiTelegram } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"

const size = 30

const buttons = [
  {
    Icon: SiBluesky,
    label: "Bluesky",
    getUrl: (url, title) =>
      `https://bsky.app/intent/compose?text=${encodeURIComponent(title + " " + url)}`,
  },
  {
    Icon: SiX,
    label: "X / Twitter",
    getUrl: (url, title, tags) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}${tags?.length ? "&hashtags=" + tags.join(",") : ""}`,
  },
  {
    Icon: SiFacebook,
    label: "Facebook",
    getUrl: (url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    getUrl: (url, title) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  },
  {
    Icon: SiWhatsapp,
    label: "WhatsApp",
    getUrl: (url, title) =>
      `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
  },
  {
    Icon: SiTelegram,
    label: "Telegram",
    getUrl: (url, title) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
]

const ShareButtons = ({ url, title, tags }) => (
  <div className="d-print-none d-flex flex-wrap gap-3 justify-content-center mt-5 text-primary">
    {buttons.map(({ Icon, label, getUrl }) => (
      <a
        key={label}
        href={getUrl(url, title, tags)}
        target="_blank"
        rel="noopener noreferrer"
        title={`Condividi su ${label}`}
        aria-label={`Condividi su ${label}`}
        style={{ color: "inherit", display: "inline-flex" }}
      >
        <Icon size={size} />
      </a>
    ))}
  </div>
)

export default ShareButtons
