import React, { Component } from "react"

class Footer extends Component {
  render () {
    return (
      <footer id="contacts" className="page-footer scrollspy">
        <div className="container">
          <div className="row">
            <div className="col l6 m8 s12 thanks">
              <h5 className="white-text">Thanks for passing by</h5>
              <p className="grey-text text-lighten-4">I truly appreciate the time you spent on my website. If you think we could work on something cool together give
                me a shout on social medias or via a direct email
                <span className="ec ec-wink"></span>
              </p>
            </div>
            <div className="col l4 m4 offset-l2 s12 connect">
              <h5 className="white-text">Connect</h5>
              <ul>
                <li>
                  <a className="waves-effect waves-light btn" href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Fmaterializecss.com%2Ffooter.html&ref_src=twsrc%5Etfw&region=follow_link&screen_name=maxdyy&tw_p=followbutton"
                    target="_blank">
                    <i className="fab fa-twitter"></i> @maxdyy
                  </a>
                </li>
                <li>
                  <a className="waves-effect waves-light btn" href="https://codepen.io/maxdyy" target="_blank">
                    <i className="fab fa-codepen"></i> maxdyy
                  </a>
                </li>
                <li>
                  <a className="waves-effect waves-light btn" href="https://github.com/maxdyy" target="_blank">
                    <i className="fab fa-github"></i> maxdyy
                  </a>
                </li>
                <li>
                  <a className="waves-effect waves-light btn" href="https://www.linkedin.com/in/maxdyy" target="_blank">
                    <i className="fab fa-linkedin-in"></i> Maksym Dmukhovskyy
                  </a>
                </li>
                <li>
                  <a className="waves-effect waves-light btn" href="mailto:dm.maksym@gmail.com?subject=MYY:%20&body=Hi%20Maksym,">
                    <i className="fab fa-telegram-plane"></i> dm.maksym@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2017-2018 Maksym Dmukhovskyy
            <a className="grey-text text-lighten-4 right" href="https://github.com/maxdyy/dmukhovskyyPortfolio" target="_blank">MIT License</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer