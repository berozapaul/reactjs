import React from 'react';
import AppContext from '../AppContext';
/*
 * Purpose: The purpose of this component is to render common header.
 *          This component is going to be common to all routes. It is
 *          also responsible for showing a signin dialog for the user.
 *          As soon as user signs up it shows the user as logged in.
 * Version: 1.0
 * Author: dev@cefalo.com
 */

const AuthUser = () =>  (
    <AppContext.Consumer>
        {(context) => {
            if(context.state.user){
                return (
                <React.Fragment>
                    <ul className="nav navbar-nav">
                        <li><a href="javascript:void(0)">Welcome {context.state.user.username}</a></li>
                        <li><a href="javascript:void(0)" onClick={context.handleLogout}><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                    </ul>
                </React.Fragment>
                )
            }
            return (
                    <a href="javascript:void(0)" onClick={context.openModal} id="signinForm">
                        <span className="glyphicon glyphicon-log-in"></span> Login
                    </a>
                )
            }
        }
    </AppContext.Consumer>
);

export default AuthUser;
