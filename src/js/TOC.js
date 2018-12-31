import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// ------------------------------------------------------
// Generates a Table of Contents for a Zine component.
// ------------------------------------------------------
class TOC extends Component {
  render() {
    return (
      <div className="zine-toc">
        <div className="about-issue">
          <h1>ISSUE 01: DREAM MACHINE</h1>
          <p><b>Our dreams are trying to tell us something about ourselves.</b><br/><br/>In dream state, our minds become untethered, free to play out the scenarios we make up in our heads; to live in other realities, under different identities. It's the means by which our subconscious attempts to peek into what (we) could have been and what (we) could be - in the near future, or maybe in another lifetime or parallel universe.<br/><br/>Our dreams are a more than a coping mechanism for our lived realities. While our dreams aren't always exciting and vivid, even our most mundane dreams might reveal some of our deepest (darkest?) desires. They often speak to us in metaphors, through amalgams of fragmented, complex, even nonsensical visual imagery. What makes them even more complex is the fact that our dreams can transcend time and space. The events that unfold aren't necessarily happening sequentially - and maybe they suspend time altogether. These are what makes remembering a dream a lot like holding water in cupped hands.<br/><br/>In this issue, we attempted dream journaling as a way to gain more control over our subconsciousness and to develop a better understanding of ourselves. For several weeks, contributors kept a dream journal and created a piece of work from their entries.</p>
        </div>
        <div className="zine-toc-container">
          <div>
            <h1>ISSUE CONTRIBUTIONS</h1>
          </div>
          <ul>
            { 
              this.props.submissions.map((sub, index) => {
                return (
                  <li key={ 'page-' + (index + 1) }>
                    <Link 
                      to={`/issue-01/${ sub.submissionTitle.replace(/ /g, "_") }`}
                      key={ sub.submissionTitle }
                    >
                      "{ sub.submissionTitle.toUpperCase() }" by { sub.author.toUpperCase() }
                    </Link>
                  </li>  
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default TOC;