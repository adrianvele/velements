import React, { Component } from "react"
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageTop } from '../components/HomepageTop'
import MainContent from '../components/MainContent'
import Cursor from '../helpers/cursor'
import DraggableImage from "../helpers/drag/draggableImage";

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Initialize custom cursor
    const cursor = new Cursor(document.querySelector(".cursor"));

    // Mouse effects on all links
    [...document.querySelectorAll("a, h2")].forEach((link) => {
      link.addEventListener("mouseenter", () => cursor.enter());
      link.addEventListener("mouseleave", () => cursor.leave());
    });

    [...document.querySelectorAll(".img-wrap")].forEach(
      (element) => new DraggableImage(element)
    );

    document.documentElement.className = "js";
    var supportsCssVars = function () {
      var e,
        t = document.createElement("style");
      return (
        (t.innerHTML = "root: { --tmp-var: bold; }"),
        document.head.appendChild(t),
        (e = !!(
          window.CSS &&
          window.CSS.supports &&
          window.CSS.supports("font-weight", "var(--tmp-var)")
        )),
        t.parentNode.removeChild(t),
        e
      );
    };
    supportsCssVars() ||
      alert(
        "Please view this website in a modern browser that supports CSS Variables."
      );

      const links = document.querySelectorAll(".scrollto");
 
      for (const link of links) {
        link.addEventListener("click", clickHandler);
      }
       
      function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
      
        document.querySelector(href).scrollIntoView({
          behavior: "smooth"
        });
      } 
    
  }

  render() {
    const { data } = this.props
    const doc = data.allPrismicHomepage.nodes[0].data

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
        <MainContent images1={doc.images1} images2={doc.images2} images3={doc.images3} images4={doc.images4} images5={doc.images5} menuTitle={RichText.asText(doc.menu_title.raw)} menus={doc.menus} pagePreview={doc.content}/>
        <svg className="cursor" width="30" height="30" viewBox="0 0 30 30">
          <circle className="cursor__inner" cx="15" cy="15" r="7.5" />
        </svg>
      </Layout>
    )
  }
}
export const query = graphql`
 {
    allPrismicHomepage {
      nodes {
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
          menu_title {
            raw
          }
          menus {
            heading {
              raw
            }
            content {
              raw
            }
            cta {
              raw
            }
          }
          images1 {
            image {
              url
            }
          }
          images2 {
            image {
              url
            }
          }
          images3 {
            image {
              url
            }
          }
          images4 {
            image {
              url
            }
          }
          images5 {
            image {
              url
            }
          }
          content {
            id {
              raw
            }
            title1 {
              raw
            }
            intro {
              raw
            }
            text {
              raw
            }
            subtext {
              raw
            }
            image {
              url
            }
          }
        }
      }
    }
  }
`