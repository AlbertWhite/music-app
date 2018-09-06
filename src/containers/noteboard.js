import { connect } from 'react-redux'
import NoteBoard from '../components/noteboard/noteboard'

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => {
  return {
    meter: state.controller.meter
  }
}

const NoteBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteBoard)

export default NoteBoardContainer
