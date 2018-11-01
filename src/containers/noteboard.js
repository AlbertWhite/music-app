import { connect } from "react-redux"
import NoteBoard from "../components/noteboard/noteboard"
import { updateNote } from "../actions/action"

const mapDispatchToProps = dispatch => ({
  updateNote: ({ note, key, meterIndex, blockIndex }) => {
    dispatch(updateNote({ meterIndex, blockIndex, note, key }))
  }
})

const mapStateToProps = state => {
  return {
    meter: state.controller.meter,
    notesSelected: state.note.notesSelected
  }
}

const NoteBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteBoard)

export default NoteBoardContainer
