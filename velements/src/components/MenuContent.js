import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs'

export default class MenuContent extends Component {
  render() {
    const headline = this.props.menuTitle
    const menus = this.props.menus

    return (
        <nav className="menu" id="menu">
          <div className="menu__headline">
              <span className="menu__headline-deco"></span>
              <span className="menu__headline-text">
                <span>
                  {headline}
                </span>
              </span>
          </div>
          {menus.map((menu, index) => (     
              <a className={`menu__item ${index === 0 ? 'menu__item--selected' : ''}`} href={RichText.asText(menu.content.raw)} key={index}>
              <span className="menu__item-title">{RichText.asText(menu.heading.raw)}</span>
              <span className="menu__item-deco">|</span>
              <span className="menu__item-cta"><span>{RichText.asText(menu.cta.raw)}</span></span>
            </a>
          ))}
      </nav>
    )
  }
}
