import Field from 'src/components/AppHeader/LoginForm/Field';

import { connect } from 'react-redux';

import { updateInputLoginContent } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => ({
  value: state.user[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(updateInputLoginContent(ownProps.name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
