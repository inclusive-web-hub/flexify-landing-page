import React from "react"
const Banner = () => {
  return (
    <section className="banner-section" id="home">
      <div className="container">
        <div className="animate__animated animate__fadeInDown">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content banner-content-inner">
                <span className="banner-title">
                  <b className="heading-top">
                    <span className="text-primary">Be</span>{" "}
                    <span className="text-white">Sure</span>
                  </b>
                  <div className="headline clip title ">
                    <h6 className="banner-title words-wrapper text-primary">
                      <b className="is-visible">
                        Your <span className="text-white">Browser</span>
                      </b>
                      <b>
                        Is <span className="text-white">Under</span>
                      </b>
                      <b>
                        Your <span className="text-white">Control.</span>
                      </b>
                    </h6>
                  </div>
                </span>

                <p>
                  Unleash the endless possibilities with freedom and inclusivity
                  by utilizing our game-changing tool.
                </p>
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa  fa-chrome"></i>
                      <span>Chrome</span>
                    </a>
                  </li>

                  <li>
                    <a className="banner-content-firefox-btn" href="/">
                      <i className="fab fa-firefox"></i>
                      <span>Firefox</span>
                    </a>
                  </li>
                </ul>
                <div className="info"></div>
              </div>
            </div>
            <div className="col-lg-5 col-sm-9 col-xs-3">
              <div className="banner-section-image">
                <div className="app-live-circle-section">
                  <div className="app-live-circle">
                    <span>
                      <img
                        src="./images/arrow.svg"
                        alt="arrow"
                        loading="lazy"
                      />
                    </span>
                    <span className="app-live-text rotated-style">
                      <img
                        src="./images/download_now.png"
                        alt="download"
                        loading="lazy"
                      />
                    </span>
                  </div>
                </div>
                <div className="thumb">
                  <div className="front-image">
                    <img
                      id="banner-1"
                      src="/images/demo.gif"
                      alt="banner"
                      loading="lazy"
                    />
                  </div>
                  <div className="back-image">
                    <img
                      src="/images/items/1.png"
                      alt="background"
                      loading="lazy"
                    />
                  </div>
                  <div className="person-front">
                    <img
                      src="/images/person.png"
                      alt="illustration"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
