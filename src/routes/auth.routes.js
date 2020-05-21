import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Authentication } from '../components/Authentication';
import { signOut } from '../actions';
import { SignIn } from '../components/SignIn';
import { SignUp } from '../components/SignUp';
import { ActivationAlert} from '../components/ActivationAlert';
import { ActivationSuccess } from '../components/ActivationSuccess';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";


function AuthRoutes({ loggedIn, registered }) {
    const history = useHistory();

    useEffect(() => {
        if (registered) {
          history.replace("/activation-alert");
        }
    },[registered, history]);

    if (loggedIn) {
        return (
            <Switch>
                <Route path="/">
                    <button onClick={ signOut }>OUT</button>
                </Route>
                <Route path="/verify/:id">
                    <ActivationSuccess />
                </Route>
            </Switch>
        )
    } 
    return (
        <Switch>
            <Route path="/sign-in">
                <Authentication>
                    <SignIn />
                </Authentication>
            </Route>
            <Route path="/sign-up">
                <Authentication>
                    <SignUp />
                </Authentication>
            </Route>
            <Route path="/activation-alert">
                <ActivationAlert />
            </Route>
            <Route path="/verify/:id">
                <ActivationSuccess />
            </Route>
            <Redirect to="/sign-in"/>
        </Switch>
    )
}

const mapStateToProps = ({ signIn: { loggedIn }, signUp: { registered } }) => {
    return {
      loggedIn,
      registered,
    }
  }
  
const connectedAuthRoutes = connect(mapStateToProps)(AuthRoutes);

export { connectedAuthRoutes as AuthRoutes }
