import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import * as authActionTypes from '../../../store/actions/auth';

const Logout = (props) => {
  useEffect(() => {
    props.onLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Navigate to="/" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(authActionTypes.authLogout());
    },
  };
};

export default connect(null, mapDispatchToProps)(Logout);
