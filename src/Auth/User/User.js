import React from 'react';
import UserDropdown from '../../Components/RightHeader/Dropdown/UserDropdown/UserDropdown';

import { Button, makeStyles } from '@material-ui/core';
import { auth, provider } from '../../firebase/firebase';

import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

const useStyles = makeStyles((theme) => ({
  loginButton: {
    marginLeft: 10
  },
}));

function User() {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();

  const [{ user }] = useStateValue();

  const classes = useStyles();

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(result => {


      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })

    })
    .catch((error) => alert(error.message));
  }

  return (
    <div>
      {!user ?
        <Button size="small" variant="contained" color="primary" className={classes.loginButton}disableElevation onClick={signIn} >login</Button>
      :
        <UserDropdown/>
      }
    </div>
  )
}

export default User
