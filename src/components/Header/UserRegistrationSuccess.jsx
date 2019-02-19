import React from 'react';
import {Navbar, Modal, Button} from 'react-bootstrap'
import {bindActionCreators} from "redux";
import actions from "../../actions/user";
import connect from "react-redux/es/connect/connect";


class UserSuccess extends React.Component {

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

                    <Modal.Body>
                        {(this.props.newUserRegistrationSuccess) ? ((this.props.UserAlreadyExists) ?
                          <div className="UserNotReg">Извините, пользователь с таким именем уже существует.</div>:
                            <div className="UserReg">Пользователь зарегистрирован</div>) :
                        <div className="UserNotReg">В регистрации отказано. Заполните все поля формы.</div>}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.actions.RegistrationOver}>Продолжить</Button>

                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );}
}


const mapStateToProps = state => ({...state.user});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const UserRegistrationSuccess = connect (mapStateToProps, mapDispatchToProps)(UserSuccess);

export default UserRegistrationSuccess;
