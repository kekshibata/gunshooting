import React from 'react';

import {
  TwitterShareButton,
  FacebookShareButton,
  LineShareButton,
  WhatsappShareButton,
  TwitterIcon,
  FacebookIcon,
  LineIcon,
  WhatsappIcon,
} from 'react-share';

const SocialIcons = ({ url }) => (
  <div className="flex flex-row justify-around w-44 my-3">
    <TwitterShareButton url={url} className="focus:opacity-60">
      <TwitterIcon size={30} round />
    </TwitterShareButton>
    <FacebookShareButton url={url}>
      <FacebookIcon size={30} round />
    </FacebookShareButton>
    <LineShareButton url={url}>
      <LineIcon size={30} round />
    </LineShareButton>
    <WhatsappShareButton url={url}>
      <WhatsappIcon size={30} round />
    </WhatsappShareButton>
  </div>
);

export default SocialIcons;
