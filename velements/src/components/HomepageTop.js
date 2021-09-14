import * as React from 'react'

export const HomepageTop = ({
  title,
  leftDescription,
  rightDescription,
  firstImage,
  secondImage,
}) => (
  <section
    className="content-top"
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
        {rightDescription}
      </div>
      <h2 className="content__top--title">{title}</h2>
      <div className="content__top--text text--2">
        {leftDescription}
      </div>
      <a className="scrollto" href="#main">scroll down</a>
  </section>
)
