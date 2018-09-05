import { connect } from 'react-redux'
import Header from '../components/header'

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({})

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
