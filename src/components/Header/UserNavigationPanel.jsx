import React from 'react';
import {Navbar, Modal, Button, Nav, NavItem} from 'react-bootstrap'
import {bindActionCreators} from "redux";
import actions from "../../actions/user";
import connect from "react-redux/es/connect/connect";
import {LinkContainer} from "react-router-bootstrap";

class UserHeader extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return ( <div>
            <Navbar inverse collapseOnSelect>
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
                        {(this.props.UserLoggedIn)&&<LinkContainer to='/Images'><NavItem className="refs">
                            Галерея
                        </NavItem></LinkContainer>}


                    </Nav>

                    <Nav pullRight>
                        <NavItem className="refs" onClick = {this.props.actions.AddingNewTopic}>
                            Добавить статью
                        </NavItem>
                        <LinkContainer to = '/'>
                        <NavItem className="refs" onClick={this.props.actions.UserLogout}>
                            Выход
                        </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                {(this.props.AddNewTopic)&&
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>
                            <p className="ModalTopicHeader">Форма отправки новой статьи</p>
                        </Modal.Title>
                    </Modal.Header>
                        <div><input className="TopicTitleInput" type="text" placeholder="Заголовок статьи"
                                    onChange={(e)=>this.props.actions.GetTopicHeader(e.target.value)}/> Заголовок статьи</div>
                    <Modal.Body>
                        <div>
                        <textarea cols="85" rows="15" onChange={(e)=>this.props.actions.GetTopicBody(e.target.value)}></textarea>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.actions.NoAddingNewTopic}>Отмена</Button>
                        <Button bsStyle="primary" onClick={this.props.actions.AcceptNewTopic}>Добавить статью</Button>
                    </Modal.Footer>
                </Modal.Dialog>}
          </div>
        );}
}


const mapStateToProps = state => ({...state.user});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const UserNavigationPanel = connect (mapStateToProps, mapDispatchToProps)(UserHeader);

export default UserNavigationPanel;
