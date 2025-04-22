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
  <div>
    <BlueskyShareButton
      url={url}
      htmlTitle={title}
      className="mx-1"
      hashtags={tags}
    >
      <BlueskyIcon size={size} round={true} />
    </BlueskyShareButton>
    <TwitterShareButton
      className="mx-1"
      url={url}
      htmlTitle={title}
      hashtags={tags}
    >
      <TwitterIcon size={size} round={true} />
    </TwitterShareButton>

    <FacebookShareButton url={url} className="mx-1" htmlTitle={title}>
      <FacebookIcon size={size} round={true} />
    </FacebookShareButton>

    <LinkedinShareButton url={url} className="mx-1" htmlTitle={title}>
      <LinkedinIcon size={size} round={true} />
    </LinkedinShareButton>

    <WhatsappShareButton url={url} className="mx-1" htmlTitle={title}>
      <WhatsappIcon size={size} round={true} />
    </WhatsappShareButton>

    <TelegramShareButton url={url} className="mx-1" htmlTitle={title}>
      <TelegramIcon size={size} round={true} />
    </TelegramShareButton>
  </div>
)

export default ShareButtons
