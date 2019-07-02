import React from 'react';
import ReactDOM from 'react-dom';
import AppContext from '../AppContext';
/*
 * Purpose: The purpose of this component is to render common header.
 *          This component is going to be common to all routes. It is
 *          also responsible for showing a signin dialog for the user.
 *          As soon as user signs up it shows the user as logged in.
 * Version: 1.0
 * Author: dev@cefalo.com
 */

const Modal = ({ modalType, children }) => (
    <AppContext.Consumer>
        {(context) => {
            if (context.state.openModalId === modalType) {
                return ReactDOM.createPortal(
                    <div className="overlay">
                        <div className="modal">
                            {children(context)}
                        </div>
                    </div>,
                    document.getElementById('modal-root')
                );
            }

            return null;
           }
        }

    </AppContext.Consumer>
);

export default Modal;
