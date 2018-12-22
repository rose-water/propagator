import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ZineControls extends Component {
  render() {
    return (
      <div className={ this.props.className }>
        <Link className={ this.props.isPrevDisabled ? "disabled" : null } to={ this.props.linkToPrev }>
          <div
            disabled={ this.props.isPrevDisabled }
            id="prev-btn"
            className="zine-controls-btn"
          >
            { 
              this.props.className === 'zine-controls-bottom' ? 
              <img 
                id="nav-btn-img"
                src={ 
                  this.props.isPrevDisabled ?
                  require("../assets/next.png") :
                  require("../assets/previous.png") 
                }
              />
              : "PREV"
            }
            </div>           
          </Link>

          <span className="page-indicator-label">
            { (this.props.currentPageNum) + "/" + (this.props.maxPagesNum) }
          </span>

          <Link className={ this.props.isNextDisabled ? "disabled" : null } to={ this.props.linkToNext }>
            <div
              disabled={ this.props.isNextDisabled }
              id="next-btn"
              className="zine-controls-btn"
            >
            { this.props.className === 'zine-controls-bottom' ? 
              <img
                disabled={ this.props.isNextDisabled }
                id="nav-btn-img"
                alt="previous button"
                src={ 
                  this.props.isNextDisabled ?
                  require("../assets/previous.png") :
                  require("../assets/next.png") 
                }
              /> : "NEXT"
            }
          </div>
        </Link>
      </div>
    );
  }
}

export default ZineControls;