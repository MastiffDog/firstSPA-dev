import React from 'react';
import admin from '../../images/admin.png'
import {Image,Grid,Row,Col,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {bindActionCreators} from "redux";
import actions from "../../actions/user";
import connect from "react-redux/es/connect/connect";

class UserList extends React.Component {
    constructor(props) {
        super(props);
        }

    componentDidMount() {
            this.props.actions.GetUsers();
    }

    render() {

        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <h1>Список зарегистрированных пользователей:</h1>
                    </Col>
                </Row>                                               {
                this.props.users.map((user, i) => {
                    return (
                        <div className="UsersContainer" key={i}>
                        <Row>
                            <Col md={2}>
                                <p>Пользователь {user.name}</p>
                            </Col>
                            <Col md={2}>
                                Ранг: <Image src={admin} width="40px" height="40px" rounded/>
                            </Col>
                            <Col md={2}>
                                <p> Электронная почта: {user.email}</p>
                            </Col>
                            <Col md={2}>
                                <p>ID: {user.id} </p>
                            </Col>
                            <Col md={4} >
                                <LinkContainer to={'/Users/'+user.id}>
                                    <Button bsStyle="info">Посмотреть информацию</Button>
                                </LinkContainer>
                            </Col>
                         </Row>
                        </div>
                    );
                })
            }

            </Grid>
        );
    }
}

const mapStateToProps = state => ({...state.user});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const Users = connect (mapStateToProps, mapDispatchToProps)(UserList);

export default Users;

