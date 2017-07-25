import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const IndexPage = () => (
  <div className="wrapper">
    <div className="profile-background">
        <div className="filter-black"></div>
    </div>

    <div className="profile-content">
      <div className="content">
        <div className="row owner">
          <div className="col-md-2 col-md-offset-5 col-sm-4 col-sm-offset-4 col-xs-6 col-xs-offset-3 text-center">
              <div className="avatar">
                  <img src="/profile.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
              </div>
              <div className="name">
                  <h4>
                    Tim White <br />

                    <small>Data Scientist</small>
                  </h4>
              </div>
          </div>
        </div>
        <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center bio">
                <p>Data Scientist with a background in Software Engineering.</p>
            </div>
        </div>

        <div className="row">
          <div className="col-md-4 text-center">
            <a href="https://linkedin.com/in/timwhite47" className="btn btn-lg" target="_blank">
              <i className="fa fa-linkedin"></i>    LinkedIn
            </a>
          </div>

          <div className="col-md-4 text-center">
            <a href="mailto://tim@timwhite.ninja" className="btn btn-lg">
              <i className="fa fa-envelope"></i>    Email
            </a>
          </div>

          <div className="col-md-4 text-center">
            <a href="https://github.com/timwhite47" className="btn btn-lg" target="_blank">
              <i className="fa fa-github"></i>    GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
