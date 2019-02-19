import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, NavbarBrand, MenuItem} from 'react-bootstrap'
import {bindActionCreators} from "redux";
import actions from "../../actions/user";
import connect from "react-redux/es/connect/connect";
import {LinkContainer} from 'react-router-bootstrap';

class InitialNavigationPanel extends React.Component {
    constructor(props) {
        super(props); // вызываем конструктор наследуемого класса React.Component
    }

    render() {
        return ( <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand"> My first SPA</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    {this.props.Initial_Header.map(item =>{
                        return <LinkContainer to={item.path} key={item.id}>
                        <NavItem className="refs">
                            {item.text}
                        </NavItem></LinkContainer>})}
                </Nav>
                <Nav pullRight>
                    <NavItem className="refs" onClick={this.props.actions.Authorisation}>
                        Вход
                    </NavItem>
                    <NavItem className="refs" onClick={this.props.actions.Registration}>
                        Регистрация
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }
}


const mapStateToProps = state => ({...state.user});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const InitialHeader = connect (mapStateToProps, mapDispatchToProps)(InitialNavigationPanel);

export default InitialHeader;


