import React from 'react'
import Helmet from 'react-helmet'
import Player from '../components/Player'
import Layout from '../components/layout'
import ogImage from '../assets/images/bg.webp'

export default function HomeIndex ({
  pageContext: {page},
}) {
  const siteTitle = 'Laplace Sound'
  const siteDescription = 'Audio Mixing and Audio Engineering'
  const title = page && page.title ? `${page.title} | ${siteTitle}` : `${siteTitle} | ${siteDescription}`
  const keywords = page && page.keywords ? page.keywords : "audio production, audio mixing, audio mastering, media composer, film score composer, location recording"

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={ogImage} />
      </Helmet>

      <div id="main">
        {page && <>
          <section id="one">
            <header className="major">
              <h2>{page.title}</h2>
            </header>
            {page.subtitle && <p>{page.subtitle}</p> }
          </section>
          {page.audioFiles && <Player files={page.audioFiles} />}
          {page.html && <section id="two"> <div dangerouslySetInnerHTML={{ __html: page.html }} /> </section>}
        </>}
        {!page &&
          <>
            <section id="one">
              <header className="major">
                <h2>Here are some of the things I do:</h2>
              </header>
              <ul className="home icons">
                <li><a className="icon fa-headphones" href="/mixing"><span className="label">Mixing</span></a></li>
                <li><a className="icon fa-music" href="/mastering"><span className="label">Mastering</span></a></li>
                <li><a className="icon fa-music" href="/composition"><span className="label">Composition</span></a></li>
                {/*
                <li><a className="icon fa-music" href="/clients"><span className="label">Clients</span></a></li>
                */}
                <li><a className="icon fa-music" href="/contact"><span className="label">Contact</span></a></li>
              </ul>
            </section>
          </>}
      </div>
    </Layout>
  )
}
