import React from "react"

const Banner = () => {
  return (
    <section className="banner-section" id="home">
      <div className="container">
        <div className="animate__animated animate__fadeInDown">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="banner-content banner-content-inner">
                <span className="banner-title">
                  <div className="headline clip title ">
                    <h6 className="banner-title words-wrapper text-primary">
                      <b className="is-visible">
                        <span className="text-primary">Connect</span>{" "}
                        <span className="text-white">Wallet.</span>
                      </b>
                      <b>
                        Choose <span className="text-white">Car.</span>
                      </b>
                      <b>
                        Complete <span className="text-white">Levels.</span>
                      </b>
                      <b>
                        Claim <span className="text-white">NFTs.</span>
                      </b>
                    </h6>
                  </div>
                </span>

                <p>
                  Play our cool game today for the perfect chance to claim an
                  NFT.
                </p>
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa  fa-chrome"></i>
                      <span>Try it Now!</span>
                    </a>
                  </li>
                </ul>
                <div className="info"></div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner-section-image">
                <div className="app-live-circle-section">
                  <div className="app-live-circle">
                    <span>
                      <img src="./images/arrow.svg" alt="" />
                    </span>
                    <span className="app-live-text rotated-style">
                      <img src="./images/download_now.png" alt="" />
                    </span>
                  </div>
                </div>
                <div className="thumb text-center">
                  <img src="./images/banner-image.png" alt="" />
                  <div className="back-image">
                    <img src="./images/pc-background.png" alt="" />
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
