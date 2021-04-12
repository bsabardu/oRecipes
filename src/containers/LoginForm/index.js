import { connect } from 'react-redux';
import LoginForm from 'src/components/AppHeader/LoginForm';
import { submitLogin, clearLoginFields, logout } from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
  pseudo: state.user.pseudo,
  loggedMessage: `Bienvenue ${state.user.pseudo}`,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin: () => dispatch(submitLogin()),
  handleLogout: () => {
    dispatch(logout(false));
    dispatch(clearLoginFields());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
