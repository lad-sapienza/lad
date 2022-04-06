import React from 'react';
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
} from 'react-share';

const size = 40;

const ShareButtons = ({ twitterHandle, url, title, tags }) => (
    <div>
      <TwitterShareButton className='mx-1'
        url={url}
        title={title}
        via={twitterHandle}
        hashtags={tags}
      >
        <TwitterIcon size={size} round={true} />
      </TwitterShareButton>
  
      <FacebookShareButton url={url} className='mx-1'>
        <FacebookIcon size={size} round={true} />
      </FacebookShareButton>
  
      <LinkedinShareButton url={url} className='mx-1'>
        <LinkedinIcon size={size} round={true} />
      </LinkedinShareButton>
  
      <WhatsappShareButton url={url} title={title} className='mx-1'>
        <WhatsappIcon size={size} round={true} />
      </WhatsappShareButton>
      
      <TelegramShareButton url={url} title={title} className='mx-1'>
        <TelegramIcon size={size} round={true} />
      </TelegramShareButton>
    </div>
  );
  
  export default ShareButtons;