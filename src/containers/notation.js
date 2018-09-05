import { connect } from 'react-redux'
import Notation from '../components/notation'

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({})

const NotationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notation)

export default NotationContainer
