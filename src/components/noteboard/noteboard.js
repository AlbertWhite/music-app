import React, { Component } from "react"
import Columns from "./columns"
import { BAR_NUMBER } from "../../constants/config"
import "./noteboard.css"

class NoteBoard extends Component {
  componentDidMount() {
    document.getElementsByClassName("noteboard__container")[0].scrollTop = 300
  }

  render() {
    let columns = []
    for (let i = 0; i < BAR_NUMBER; i++) {
      const columnsNotesSelected = this.props.notesSelected[i]
        ? this.props.notesSelected[i]
        : false
      columns.push(
        <Columns
          {...this.props}
          meterIndex={i}
          columnsNotesSelected={columnsNotesSelected}
        />
      )
    }

    return <div className="noteboard__container">{columns}</div>
  }
}

export default NoteBoard
