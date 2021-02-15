import React from 'react'
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <OutboundLink href="https://www.instagram.com/laplacesound/" target="_blank" rel="noreferrer" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </OutboundLink>
        </li>
        {/*
        <li>
          <OutboundLink href="https://www.youtube.com/channel/UCBZaj_OerrSEMgRppGebFlw" target="_blank" rel="noreferrer" className="icon fa-youtube">
            <span className="label">YouTube</span>
          </OutboundLink>
        </li>
        */}
        <li>
          <OutboundLink href="https://twitter.com/laplacesound" target="_blank" rel="noreferrer" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </OutboundLink>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
