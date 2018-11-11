import React from "react"
import Header from "./containers/header"
import NoteBoard from "./containers/noteboard"
import Footer from "./containers/footer"
import "./common.css"

export const App = () => (
  <React.Fragment>
    <Header />
    <NoteBoard />
    <Footer />
  </React.Fragment>
)
