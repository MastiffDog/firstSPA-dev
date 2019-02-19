import {
    USER_LOGGED_IN,
    USER_REGISTRATION_NOT,
    USER_REGISTRATION,
    USER_SUBMIT,
    USER_NOT_LOGGED_IN,
    USER_NAME,
    USER_PASSWORD,
    USERS_START_LOADING,
    USERS_LOADING_SUCCESFUL,
    USERS_LOADING_FAILED,
    GET_TOPICS,
    ENABLE_COMMENTS,
    USER_LOGOUT,
    NEW_USER_NAME,
    NEW_USER_MAIL,
    NEW_USER_PHONE,
    NEW_USER_REG_TRY,
    NEW_USER_SURNAME,
    USER_REGISTER_OVER,
    USER_PRESS_DIZLIKE,
    USER_PRESS_LIKE,
    ADD_NEW_TOPIC,
    ADD_NEW_TOPIC_BODY,
    ADD_NEW_TOPIC_HEADER,
    NO_ADDING_NEW_TOPIC,
    ACCEPT_NEW_TOPIC,
    COMMENTS_LOADING_FAILED,
    COMMENTS_LOADING_SUCCESFUL,
    COMMENTS_START_LOADING,
    CLOSE_COMMENTS,
    ADD_COMMENT,
    NO_ADDING_COMMENT,
    GET_COMMENT_BODY,
    ACCEPT_NEW_COMMENT,
    IMAGES_LOADING_FAILED,
    IMAGES_LOADING_SUCCESFUL,
    IMAGES_START_LOADING,
} from '../constants';
import axios from "axios";


const actions = {
    Authorisation() {
        return {
            type: USER_LOGGED_IN,
        }
    },
    Registration() {
        return {
            type: USER_REGISTRATION,
        }
    },
    AuthorisationNot() {
        return {
            type: USER_NOT_LOGGED_IN
        }
    },
    RegistrationNot () {
        return {
            type: USER_REGISTRATION_NOT
        }
    },
    LoginChange (user_login) {
        return{
            user_login,
            type: USER_NAME
        }
    },
    PasswordChange (user_password) {
        return{
            user_password,
            type: USER_PASSWORD
        }
    },
    UserNameChange (NewUserName) {
        return {
            NewUserName,
            type: NEW_USER_NAME
        }
    },
    UserSurNameChange (NewUserSurName) {
        return {
            NewUserSurName,
            type: NEW_USER_SURNAME
        }
    },
    MailChange (NewUserMail) {
        return {
            NewUserMail,
            type: NEW_USER_MAIL
        }
    },
    PhoneChange (NewUserPhone) {
        return {
            NewUserPhone,
            type: NEW_USER_PHONE
        }
    },
    RegisterNewUser(){
        return {
            type: NEW_USER_REG_TRY
        }
    },
    RegistrationOver () {
      return {
          type: USER_REGISTER_OVER
      }
    },
    UserSubmit () {
        return {
            type: USER_SUBMIT
        }
    },
    UserLogout () {
        return{
            type: USER_LOGOUT
        }
    },
    GetUsers (){
        return (dispatch, getStore) => {
           dispatch({
               type: USERS_START_LOADING
           });
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                 dispatch({
                     type: USERS_LOADING_SUCCESFUL,
                     payload: response.data
                 })
                })
                .catch(reason => {
                 dispatch({
                     type: USERS_LOADING_FAILED,
                     error: reason.message
                 })
                })
        }
    },
    GetTopics(){
        return {type: GET_TOPICS}
    },
    ShowComments(status) {
        return {
            status,
            type: ENABLE_COMMENTS
        };
    },
    Like(LikeId, LikeUserName){
        return {
            LikeId,
            LikeUserName,
            type: USER_PRESS_LIKE
        }
    },
    DizLike(DizLikeId, DizLikeUserName){
        return {
            DizLikeId,
            DizLikeUserName,
            type: USER_PRESS_DIZLIKE
        }
    },
    AddingNewTopic () {
        return {
            type: ADD_NEW_TOPIC
        };
    },
    GetTopicBody (ContentBody){
        return {
            ContentBody,
            type: ADD_NEW_TOPIC_BODY
        }
    },
    GetTopicHeader (ContentHeader) {
        return {
            ContentHeader,
            type: ADD_NEW_TOPIC_HEADER
        }
    },
    NoAddingNewTopic () {
        return {
            type: NO_ADDING_NEW_TOPIC
        }
    },
    AcceptNewTopic () {
        return {
            type: ACCEPT_NEW_TOPIC
        }
    },
    GetComments (){
        return (dispatch, getStore) => {
            dispatch({
                type: COMMENTS_START_LOADING
            });
            axios
                .get('https://jsonplaceholder.typicode.com/comments')
                .then(response => {
                    dispatch({
                        type: COMMENTS_LOADING_SUCCESFUL,
                        payload: response.data
                    })
                })
                .catch(reason => {
                    dispatch({
                        type: COMMENTS_LOADING_FAILED,
                        error: reason.message
                    })
                })
        }
    },
    closeComments (topicID) {
        return {
            topicID,
            type: CLOSE_COMMENTS
        }
    },
    AddComment (CommentTopicID) {
        return {
            CommentTopicID,
            type: ADD_COMMENT
        }
    },
    NoAddingComment (CommentTopicID) {
        return {
            CommentTopicID,
            type: NO_ADDING_COMMENT
        }
    },
    GetCommentBody (CommentBody){
        return {
            CommentBody,
            type: GET_COMMENT_BODY
        }
    },
    AcceptNewComment(CommentTopicID) {
        return {
            CommentTopicID,
            type: ACCEPT_NEW_COMMENT
        }
    },
    GetImages (){
        return (dispatch, getStore) => {
            dispatch({
                type: IMAGES_START_LOADING
            });
            axios
                .get('https://jsonplaceholder.typicode.com/photos')
                .then(response => {
                    dispatch({
                        type: IMAGES_LOADING_SUCCESFUL,
                        payload: response.data
                    })
                })
                .catch(reason => {
                    dispatch({
                        type: IMAGES_LOADING_FAILED,
                        error: reason.message
                    })
                })
        }
    },
}


export default actions;
