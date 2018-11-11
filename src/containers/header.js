import { connect } from "react-redux"
import Header from "../components/header"
import { updateMeter, updateBpm } from "../actions/action"
const mapDispatchToProps = dispatch => ({
  updateMeter: meter => {
    dispatch(updateMeter({ meter }))
  },
  updateBpm: bpm => {
    dispatch(updateBpm({ bpm }))
  }
})

const mapStateToProps = state => ({
  notesSelected: state.note.notesSelected,
  meter: state.controller.meter,
  bpm: state.controller.bpm
})

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
