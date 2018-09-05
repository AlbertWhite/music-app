import { connect } from 'react-redux'
import NoteBoard from '../components/noteboard'

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({})

const NoteBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteBoard)

export default NoteBoardContainer
