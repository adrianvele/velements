import React, { Component } from "react"

export default class BackgroundImages extends Component {
  render() {
    const images1 = this.props.images1
    const images2 = this.props.images2
    const images3 = this.props.images3
    const images4 = this.props.images4
    const images5 = this.props.images5

    return (
        <div className="bg-gallery-wrap">
            <div class="bg-gallery bg-gallery--1">
                {images1.map((image, index) => (     
                    <img className="bg-gallery__item" src={image.image.url} alt={image.image.slug} key={index}/>
                ))}
            </div>
            <div class="bg-gallery bg-gallery--2">
                {images2.map((image, index) => (     
                    <img className="bg-gallery__item" src={image.image.url} alt={image.image.slug} key={index}/>
                ))}
            </div>
            <div class="bg-gallery bg-gallery--3">
                {images3.map((image, index) => (     
                    <img className="bg-gallery__item" src={image.image.url} alt={image.image.slug} key={index}/>
                ))}
            </div>
            <div class="bg-gallery bg-gallery--4">
                {images4.map((image, index) => (     
                    <img className="bg-gallery__item" src={image.image.url} alt={image.image.slug} key={index}/>
                ))}
            </div>
            <div class="bg-gallery bg-gallery--5">
                {images5.map((image, index) => (     
                    <img className="bg-gallery__item" src={image.image.url} alt={image.image.slug} key={index}/>
                ))}
            </div>
        </div>
    )
  }
}
