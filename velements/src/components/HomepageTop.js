import * as React from 'react'
import homeBanner from '../images/home-banner.jpg'

export const HomepageTop = ({
  title,
  leftDescription,
  rightDescription,
  firstImage,
  secondImage,
}) => (
  <section
    className="content-top"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${homeBanner})`,
    }}
  >
      <div className="content__drag-area">
        <div className="img-wrap">
          <div className="img-drag" 
            style={{
              backgroundImage: `url(${firstImage})`,
            }}> 
          </div>
        </div>
        <div className="img-wrap">
          <div className="img-drag" 
            style={{
              backgroundImage: `url(${secondImage})`,
            }}> 
          </div>
        </div>
      </div>
      
      <div className="content__top--text text--1">
       {leftDescription}
      </div>
      <h2 className="content__top--title">{title}</h2>
      <div className="content__top--text text--2">
       {rightDescription}
      </div>
      <a className="scrollto" href="#main">scroll down</a>
  </section>
)
