import React from 'react';
import InitialHeader from './InitialHeader';
import LoginHeaderForm from './LoginHeaderForm';
import NewUserRegistrationForm from './NewUserRegistrationForm';
import UserRegistrationSuccess from './UserRegistrationSuccess';
import UserNavigationPanel from './UserNavigationPanel';
import {bindActionCreators} from "redux";
import actions from "../../actions/user";
import connect from "react-redux/es/connect/connect";

class Navigation extends React.Component {
    constructor(props) {
        super(props); // вызываем конструктор наследуемого класса React.Component
    }
    render()
        {
        if (this.props.Logged_In) {
            return (<LoginHeaderForm/>);
        }
        if (this.props.newUser === "started") {
            return (<NewUserRegistrationForm/>);
        }
        if (this.props.newUser === "success") {
            return (<UserRegistrationSuccess/>);
        }
        if (this.props.UserLoggedIn) {
            return (<UserNavigationPanel/>);
        }
        return ( <InitialHeader/>);
    }}

const mapStateToProps = state => ({...state.user});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const Header = connect (mapStateToProps, mapDispatchToProps)(Navigation);

export default Header;

