import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react'
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import Signup from '../signup/Signup';

import { loginRequest } from '../../actions/Login';

class Login extends Component {
    state = { modalOpen: false }

    handleOpen = (e) => this.setState({
        modalOpen: true,
    })

    handleClose = (e) => this.setState({
        modalOpen: false,
    })

    _handleLoginSubmit = (values) => {
        this.props.loginRequest(values.username, values.password);
    }

    render() {
        return (
            <Modal closeIcon='close' trigger={this.props.triggerButton} size='small'>
                <Modal.Header>링쿠 로그인</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <h>링쿠는 대학생만 이용할 수 있는 서비스입니다.</h>
                        <LoginForm onSubmit={this._handleLoginSubmit}/>
                        <Signup />
                    </Modal.Description>
                </Modal.Content>
             </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest : (username, password) => {
            return dispatch(loginRequest(username, password));
        },
    };
};

export default connect(null, mapDispatchToProps)(Login);
