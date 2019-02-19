import React from 'react';
import {Navbar, Modal, Button} from 'react-bootstrap'
import {bindActionCreators} from "redux";
import actions from "../../actions/user";
import connect from "react-redux/es/connect/connect";


class NewUserRegistration extends React.Component {

    constructor(props) {
        super(props); // вызываем конструктор наследуемого класса React.Component
    }
    render() {
        console.log('new user',this.props);
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
                        <div className="Login"><input type="text" placeholder="Имя" className="reg" onChange={(e)=>this.props.actions.UserNameChange(e.target.value)}/> Ваше имя</div>
                        <div className="Login"><input type="text" placeholder="Фамилия" className="reg" onChange={(e)=>this.props.actions.UserSurNameChange(e.target.value)}/> Ваша фамилия</div>
                        <div className="Login"><input type="text" placeholder="e-mail" className="reg" onChange={(e)=>this.props.actions.MailChange(e.target.value)}/> Ваш e-mail</div>
                        <div className="Login"><input type="text" placeholder="Телефон" className="reg" onChange={(e)=>this.props.actions.PhoneChange(e.target.value)}/> Ваш телефон</div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.actions.RegistrationNot}>Отмена</Button>
                        <Button bsStyle="primary" onClick={this.props.actions.RegisterNewUser}>Зарегистрироваться</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );}
}


const mapStateToProps = state => ({...state.user});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const NewUserRegistrationForm = connect (mapStateToProps, mapDispatchToProps)(NewUserRegistration);

export default NewUserRegistrationForm;

