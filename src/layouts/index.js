import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../assets/css/bootstrap.css'
import '../assets/css/ct-paper.css'
import '../assets/css/font-awesome.min.css'

import { Button } from 'react-bootstrap'

const Header = () => (
  <nav className="navbar navbar-ct-transparent navbar-relative " role="navigation-demo" id="register-navbar">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Tim White</Link>
          </div>

          <div className="collapse navbar-collapse" id="navigation">
            <ul className="nav navbar-nav navbar-right">
              <li>
                  <a href="https://linkedin.com/in/timwhite47" className="btn btn-simple" target="_blank">
                    <i className="fa fa-linkedin fa-3x"></i>
                  </a>
              </li>
              <li>
                <a href="https://github.com/timwhite47" className="btn btn-simple" target="_blank">
                  <i className="fa fa-github fa-3x"></i>
                </a>
              </li>
             </ul>
          </div>
        </div>
      </nav>
)

const TemplateWrapper = ({
  children
}) => (
    <div>
      <Helmet
        title="Tim White"
        meta={[
          { name: 'description', content: 'Data Scientist living in Seattle' },
          { name: 'keywords', content: 'seattle, data, data scientist, software, engineering, data engineer, software engineer' },
        ]}
      />
      <Header />
      <div>
        {children()}
      </div>
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
