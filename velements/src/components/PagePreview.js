import React, { Component } from "react"
import { RichText } from 'prismic-reactjs'

export default class PagePreview extends Component {
  render() {
    const allContent = this.props.content

    return (
        <section className="page page--preview">
            {allContent.map((content, index) => (     
               <div className="content" id={RichText.asText(content.id.raw)} data-bgcolor="#111" key={index}>
                    <a className="content__back" href="#menu" aria-label="Back to menu">
                        <svg class="icon icon--arrow">
                            <use xlinkHref="#icon-arrow"></use>
                        </svg>
                    </a>
                    <h2 className="content__title"><span>{RichText.asText(content.title1.raw)}</span></h2>
                    <p className="content__intro">
                        <span>
                            {RichText.asText(content.intro.raw)}
                        </span>
                    </p>
                    <p className="content__text">
                        <span>
                            {RichText.asText(content.text.raw)}
                        </span>
                    </p>
                    <span className="content__date">
                        <span>{RichText.asText(content.subtext.raw)}</span>
                    </span>
                    <div className="gallery">
                        <figure className="gallery__figure">
                            <img
                                className="gallery__figure-img"
                                src={content.image.url}
                                alt="Velements"
                            />
                            <figcaption className="gallery__figure-caption">{content.image.alt}</figcaption>
                        </figure>
                    </div>
               </div>
            ))}
        </section>
    )
  }
}
