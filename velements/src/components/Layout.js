import * as React from 'react'
import './../styles/base.css'

export const Layout = ({ children }) => (
  <>
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
    {children}
  </>
)
