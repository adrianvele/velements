import * as React from 'react'
import { Footer } from './Footer'
import './../styles/base.css'

export const Layout = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
)
