import React, { useEffect } from 'react';
import './App.css';
import { AuthRoutes } from '../../routes';
import { checkToken } from "../../actions";

function App() {
    useEffect(() => {
        checkToken();
    }, []);

    return (
      <div className = "App">
        <AuthRoutes />
      </div>
    );
}

export default App;
