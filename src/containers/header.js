import { connect } from "react-redux"
import Header from "../components/header"
import { updateMeter } from "../actions/action"
const mapDispatchToProps = dispatch => ({
  updateMeter: meter => {
    dispatch(updateMeter({ meter }))
  }
})

const mapStateToProps = state => ({
  notesSelected: state.note.notesSelected,
  meter: state.controller.meter
})

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
