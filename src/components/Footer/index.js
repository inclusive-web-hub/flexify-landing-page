import React from "react"

const Footer = () => {
  return (
    <section id="footer-section" className="footer-section">
      <div className="container">
        <footer id="footer" className="footer">
          <div id="footer-widget" className="border-bottom"></div>
          <div id="bottom" className="bottom text-white">
            <div className="row">
              <div className="col-lg-4">
                <div className="copyright">
                  Developed with ❤️ by wiseaidev © 2023
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="widget-nav-menu"></ul>
              </div>
              <div className="col-lg-2">
                <div className="socials-list">
                  <a
                    href="https://twitter.com/wiseaidev"
                    target="_blank"
                    rel="noreferrer"
                    className="custom-bg-dark"
                    title="Twitter"
                  >
                    <i className="fa-brands fa-twitter" alt="twitter" />
                  </a>
                  <a
                    href="https://github.com/wiseaidev"
                    target="_blank"
                    rel="noreferrer"
                    className="custom-bg-dark"
                    title="Github"
                  >
                    <i className="fa-brands fa-github" alt="github" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mahmoud-harmouch"
                    className="custom-bg-dark"
                    target="_blank"
                    rel="noreferrer"
                    title="Linkedin"
                  >
                    <i className="fa-brands fa-linkedin" alt="linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer
