import React, { Component }  from 'react';
import AppContext from '../AppContext';
/*
 * Purpose: The purpose of this component is to render common header.
 *          This component is going to be common to all routes. It is
 *          also responsible for showing a signin dialog for the user.
 *          As soon as user signs up it shows the user as logged in.
 * Version: 1.0
 * Author: dev@cefalo.com
 */

class ModalProvider extends Component {
    constructor(...args) {
        super(...args);
        this.state = { openModalId: '', user: '' };
    }

    openModal(event) {
        this.setState({ openModalId: event.target.id });
    }

    closeModal() {
        this.setState({ openModalId: '' });
    }

    handleLogin(event) {
        let userObj = {username: event.target.username.value, password: event.target.password.value};
        this.setState({ user: userObj });
        this.setState({ openModalId: '' });
    }

    handleLogout(event){
        this.setState({ user: ''});
    }

    render() {
        return (
            <AppContext.Provider value={{
                state:this.state,
                openModal: (e) => this.openModal(e),
                handleLogin: (e) => this.handleLogin(e),
                handleLogout: () => this.handleLogout(),
                closeModal: () => this.closeModal()
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default ModalProvider;
