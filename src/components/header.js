import React from 'react'
import { Helmet } from 'react-helmet'

export const Header = () => (
  <Helmet>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Best of Penn" />
    <title>DP Tech</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    />

    <meta
      property="og:title"
      content="Best of Penn | The Daily Pennsylvanian"
    />
    <meta
      property="og:image"
      content="https://snworksceo.imgix.net/dpn/911a0997-d5e4-44f9-a21c-b4641280f6fe.sized-1000x1000.png"
    />
    <meta property="og:description" content="Best of Penn" />
    <meta property="og:type" content="article" />
    <meta
      property="og:url"
      content="https://projects.thedp.com/2021/best-of-penn"
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Best of Penn | The Daily Pennsylvanian"
    />
    <meta
      name="twitter:image"
      content="https://snworksceo.imgix.net/dpn/911a0997-d5e4-44f9-a21c-b4641280f6fe.sized-1000x1000.png"
    />
    <meta name="twitter:description" content="Best of Penn" />
    <meta
      name="twitter:url"
      content="https://projects.thedp.com/2021/best-of-penn"
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