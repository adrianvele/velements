import React, { Component } from "react"
import BackgroundImages from "../components/backgroundImages"
import MenuContent from "../components/MenuContent"
import PagePreview from "../components/PagePreview"

class MainContent extends Component {
  render() {
    const images1 = this.props.images1
    const images2 = this.props.images2
    const images3 = this.props.images3
    const images4 = this.props.images4
    const images5 = this.props.images5
    const menuTitle = this.props.menuTitle
    const menus = this.props.menus
    const pagePreview = this.props.pagePreview

    return (
      <main id="main">
      <svg className="hidden">
          <symbol id="icon-arrow" viewBox="0 0 511.996 511.996">
            <title>Arrow left</title>
            <path
              d="M462.51 220.392H172.707l67.017-68.342a7.133 7.133 0 00.014-9.956l-39.544-40.612a7.13 7.13 0 00-10.204 0L44.383 251.028a7.128 7.128 0 000 9.941L189.99 410.514c1.338 1.375 3.176 2.15 5.099 2.15s3.76-.775 5.105-2.15l39.544-40.612a7.126 7.126 0 00-.014-9.956l-67.017-68.342H462.51c3.93 0 7.12-3.19 7.12-7.12v-56.97a7.124 7.124 0 00-7.12-7.122z"
            />
          </symbol>
      </svg>
        <div className="frame">
          <h1 className="frame__title">by Adrian Vele</h1>
          <div className="frame__links">
            <a href="https://instagram.com/velements_/">instagram</a>
            <a href="https://facebook.com/velements1/">facebook</a>
          </div>
        </div>
    
        <BackgroundImages images1={images1} images2={images2} images3={images3} images4={images4} images5={images5} />
        <MenuContent menuTitle={menuTitle} menus={menus}/>
        <PagePreview content={pagePreview}/>

      </main>
    )
  }
}

export default MainContent