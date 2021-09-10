import React, { Component } from "react"
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageTop } from '../components/HomepageTop'
import { MainContent } from '../components/MainContent'
import Cursor from '../helpers/cursor'
import DraggableImage from "../helpers/drag/draggableImage";



export default class IndexPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Initialize custom cursor
    console.log(document.querySelector(".cursor"))
    const cursor = new Cursor(document.querySelector(".cursor"));

    // Mouse effects on all links
    [...document.querySelectorAll("a, h2")].forEach((link) => {
      link.addEventListener("mouseenter", () => cursor.enter());
      link.addEventListener("mouseleave", () => cursor.leave());
    });

    [...document.querySelectorAll(".img-wrap")].forEach(
      (element) => new DraggableImage(element)
    );
  }

  render() {
    const { data } = this.props
    const doc = data.prismicHomepage.data

    return (
      <Layout isHomepage>
        <Seo title="Home" />
        <HomepageTop 
          title={RichText.asText(doc.title.raw)}
          leftDescription={RichText.asText(doc.left_description.raw)}
          rightDescription={RichText.asText(doc.right_description.raw)}
          firstImage={doc.first_image.url}
          secondImage={doc.second_image.url}
        />
        <MainContent />
        <svg className="cursor" width="30" height="30" viewBox="0 0 30 30">
          <circle className="cursor__inner" cx="15" cy="15" r="7.5" />
        </svg>
      </Layout>
    )
  }
}
export const query = graphql`
  query Homepage {
    prismicHomepage {
      data {
        title {
          raw
        }
        left_description {
          raw
        }
        right_description {
          raw
        }
        first_image {
          url
        }
        second_image {
          url
        }
      }
    }
  }
`