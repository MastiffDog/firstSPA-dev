import React from 'react';
import {Navbar, Modal, Button} from 'react-bootstrap'
import {bindActionCreators} from "redux";
import actions from "../../actions/user";
import connect from "react-redux/es/connect/connect";


class LoginHeader extends React.Component {

    constructor(props) {
        super(props); // вызываем конструктор наследуемого класса React.Component
    }
    render() {
        return (
            <div>
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand"> My first SPA</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            </Navbar>

            <Modal.Dialog>
            <Modal.Header>
            <Modal.Title>Введите пожалуйста ваш логин и пароль:</Modal.Title>
       </Modal.Header>

       <Modal.Body>
           <div className="Login"><input type="text" placeholder="Login" onChange={(e)=>this.props.actions.LoginChange(e.target.value)}/> Ваш логин</div>
           <div className="Login"><input type="password" placeholder="Password" onChange={(e)=>this.props.actions.PasswordChange(e.target.value)}/> Ваш пароль</div>
       </Modal.Body>

        <Modal.Footer>
        <Button onClick={this.props.actions.AuthorisationNot}>Отмена</Button>
        <Button bsStyle="primary" onClick={this.props.actions.UserSubmit}>Войти</Button>
        </Modal.Footer>
    </Modal.Dialog>
            </div>
        );}
}


const mapStateToProps = state => ({...state.user});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const LoginHeaderForm = connect (mapStateToProps, mapDispatchToProps)(LoginHeader);

export default LoginHeaderForm;

