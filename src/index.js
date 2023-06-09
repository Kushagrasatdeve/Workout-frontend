import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext'
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.render(
    <div>
        <AuthContextProvider>
            <WorkoutsContextProvider>
                <App />
            </WorkoutsContextProvider>
        </AuthContextProvider>

    </div>
    , document.getElementById('root'));