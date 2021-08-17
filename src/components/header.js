import React from 'react'
import { Helmet } from 'react-helmet'

export const Header = ({ title = '' }) => (
  <Helmet>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Landing page of the DP Developers that showcases our products and team members." />
    <title>{`${title}DP Developers`}</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    />

    <meta
      property="og:title"
      content="DP Developers"
    />
    <meta
      property="og:image"
      content="https://storage.googleapis.com/tech-website/social-join.png"
    />
    <meta property="og:description" content="Landing page of the DP Developers that showcases our products and team members." />
    <meta
      property="og:url"
      content="https://developers.thedp.com/"
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="DP Developers"
    />
    <meta
      name="twitter:image"
      content="https://storage.googleapis.com/tech-website/social-join.png"
    />
    <meta name="twitter:description" content="Landing page of the DP Developers that showcases our products and team members." />
    <meta
      name="twitter:url"
      content="https://developers.thedp.com/"
    />
    <meta name="twitter:site" content="@dailypenn"></meta>

    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossOrigin="anonymous"
    ></script>
  </Helmet>
)