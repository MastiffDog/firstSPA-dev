import React from 'react';
import Home from './Home';
import Footer from './Footer';
import Creator from './Creator';
import Images from './Images';
import Users from './Users/Users';
import User from './Users/User';
import Topics from './Topics/Topics'
import {bindActionCreators} from "redux";
import actions from "../actions/user";
import connect from "react-redux/es/connect/connect";
import Header from './Header/Header';
import { Route, Switch, Link} from 'react-router-dom';



class Assembly extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
             <div> <Header/>
                <Switch>
                     <Route path='/' exact component={Home}/>
                     <Route path='/Creator' exact component={Creator}/>
                     <Route path='/Users' exact component={Users}/>
                     <Route path='/Topics' exact component={Topics}/>
                     <Route path='/Images' exact component = {Images}/>
                     <Route
                       path="/Users/:id"
                       exact
                       render={(props) => {
                           const userId = +props.match.params.id;
                           const selectedUser = this.props.users.find((user) => user.id === userId);
                           return <User data={selectedUser}/>
                        }}/>
                </Switch>
                <Footer />
             </div>



        );
    }
}

const mapStateToProps = state => ({...state.user});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const Main = connect (mapStateToProps, mapDispatchToProps)(Assembly);

export default Main;
