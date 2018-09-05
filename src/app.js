import React from 'react'
import Header from './containers/header'
import NoteBoard from './containers/noteboard'
import Notation from './containers/notation'
import Footer from '../containers/footer'

export const App = () => (
  <React.Fragment>
    <Header />
    <NoteBoard />
    <Notatoin />
    <Footer />
  </React.Fragment>
)
