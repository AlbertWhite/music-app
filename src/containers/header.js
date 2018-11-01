import { connect } from "react-redux"
import Header from "../components/header"

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({
  notesSelected: state.note.notesSelected
})

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
