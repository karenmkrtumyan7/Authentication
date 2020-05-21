import React, { useEffect } from 'react';
import './App.css';
import { AuthRoutes } from '../../routes';
import { checkToken } from "../../actions";
import  Cookies from "js-cookie";

function App() {
    useEffect(() => {
      if (Cookies.get("userId") && Cookies.get("token")) {
        checkToken();
      }
    }, []);

    return (
      <div className = "App">
        <AuthRoutes />
      </div>
    );
}

export default App;
