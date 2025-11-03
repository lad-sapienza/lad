import React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  BlueskyShareButton,
  BlueskyIcon,
} from "react-share"

const size = 40

const ShareButtons = ({ url, title, tags }) => (
  <div className="d-print-none">
    <BlueskyShareButton
      url={url}
      title={title}
      className="mx-1"
    >
      <BlueskyIcon size={size} round={true} />
    </BlueskyShareButton>
    <TwitterShareButton
      className="mx-1"
      url={url}
      title={title}
      hashtags={tags}
    >
      <TwitterIcon size={size} round={true} />
    </TwitterShareButton>

    <FacebookShareButton url={url} className="mx-1" hashtag={tags?.[0] ? `#${tags[0]}` : undefined}>
      <FacebookIcon size={size} round={true} />
    </FacebookShareButton>

    <LinkedinShareButton url={url} className="mx-1" title={title}>
      <LinkedinIcon size={size} round={true} />
    </LinkedinShareButton>

    <WhatsappShareButton url={url} className="mx-1" title={title}>
      <WhatsappIcon size={size} round={true} />
    </WhatsappShareButton>

    <TelegramShareButton url={url} className="mx-1" title={title}>
      <TelegramIcon size={size} round={true} />
    </TelegramShareButton>
  </div>
)

export default ShareButtons
