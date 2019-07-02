import React from 'react';
import Modal from './Modal';
import AuthUser from './AuthUser';
/*
 * Purpose: The purpose of this component is to render common header.
 *          This component is going to be common to all routes. It is
 *          also responsible for showing a signin dialog for the user.
 *          As soon as user signs up it shows the user as logged in.
 * Version: 1.0
 * Author: dev@cefalo.com
 */

const Header = () =>{
   return(
       <div>
           <nav className="navbar navbar-default">
               <div className="container-fluid">
                   <div className="navbar-header">
                       <a className="navbar-brand" href="/">ReactJS</a>
                   </div>
                   <ul className="nav navbar-nav">
                       <li className="active"><a href="#">Home</a></li>
                       <li><a href="#">About</a></li>
                   </ul>
                   <ul className="nav navbar-nav navbar-right">
                       <li>
                           <AuthUser/>
                       </li>
                   </ul>
               </div>
           </nav>
           <Modal modalType="signinForm">
               {(context) => (
                   <React.Fragment>
                       <form onSubmit={context.handleLogin}>
                           <h2>Welcome to ReactJS!!</h2>
                           <div className="form-group">
                                <input name="username" placeholder="Username" className="form-control" type="text" />
                           </div>
                           <div className="form-group">
                               <input name="password" placeholder="Password" className="form-control" type="password" />
                           </div>
                           <input type="submit" value="Submit" className="btn btn-primary active" /> &nbsp;
                           <button onClick={context.closeModal} className="btn btn-primary">Close</button>
                       </form>
                   </React.Fragment>
               )}
           </Modal>
       </div>
   )
};
export default Header;
