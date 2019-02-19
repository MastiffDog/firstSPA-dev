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
    COMMENTS_LOADING_SUCCESFUL,
    COMMENTS_START_LOADING,
    COMMENTS_LOADING_FAILED,
    CLOSE_COMMENTS,
    ADD_COMMENT,
    NO_ADDING_COMMENT,
    GET_COMMENT_BODY,
    ACCEPT_NEW_COMMENT,
    IMAGES_LOADING_FAILED,
    IMAGES_LOADING_SUCCESFUL,
    IMAGES_START_LOADING
} from '../constants';

import { Initial_State } from '../constants/first_state';
import {TopicsContent} from "../components/Topics/TopicsContent";
import React from "react";

export default function (state = Initial_State, action) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {...state, Logged_In: true};
        case USER_NOT_LOGGED_IN:
            return {...state, Logged_In: false};
        case USER_REGISTRATION:
            return {...state, newUser: 'started'};
        case USER_REGISTRATION_NOT:
            return {...state, newUser: null};
        case NEW_USER_NAME:
            const {NewUserName} = action;
            return {...state, NewUserName: NewUserName.length > 0 ? NewUserName : null};
        case NEW_USER_SURNAME:
            const {NewUserSurName} = action;
            return {...state, NewUserSurName: NewUserSurName.length > 0 ? NewUserSurName : null};
        case NEW_USER_MAIL:
            const {NewUserMail} = action;
            return {...state, NewUserMail: NewUserMail.length > 0 ? NewUserMail : null};
        case NEW_USER_PHONE:
            const {NewUserPhone} = action;
            return {...state, NewUserPhone: NewUserPhone.length > 0 ? NewUserPhone : null};
        case NEW_USER_REG_TRY:
            const Name = state.NewUserName;
            const SurName = state.NewUserSurName;
            const Mail = state.NewUserMail;
            const Phone = state.NewUserPhone;
            //тут еще писать функцию добавления юзера
            if ((typeof Name === 'string') && (typeof SurName === 'string') && (typeof Mail === 'string') && (typeof Phone === 'string')) {
                let newNames = state.usernames;
                const arrowNameMatch = newNames.filter((name) => {
                    return name === Name
                });
                if (arrowNameMatch.length === 0) {
                    newNames.push(Name);
                    let userlist = state.users;
                    const newCounter = state.counter + 1;
                    userlist.push({id: newCounter, name: Name, username: SurName, email: Mail, phone: Phone})
                    return {
                        ...state,
                        newUser: 'success',
                        newUserRegistrationSuccess: true,
                        NewUserPhone: null,
                        NewUserMail: null,
                        NewUserName: null,
                        NewUserSurName: null,
                        UserAlreadyExists: false,
                        usernames: newNames,
                        counter: newCounter,
                        users: userlist
                    }
                }
                return {
                    ...state, newUser: 'success',
                    newUserRegistrationSuccess: true,
                    NewUserPhone: null,
                    NewUserMail: null,
                    NewUserName: null,
                    NewUserSurName: null,
                    UserAlreadyExists: true
                };
            }
            return {
                ...state, newUser: 'success',
                newUserRegistrationSuccess: false,
                NewUserPhone: null,
                NewUserMail: null,
                NewUserName: null,
                NewUserSurName: null,
                UserAlreadyExists: false
            };
        case USER_REGISTER_OVER:
            return {...state, newUser: null, newUserRegistrationSuccess: false, Logged_In: false};
        case USER_NAME:
            const {user_login} = action;
            return {...state, Username: user_login.length > 0 ? user_login : null};
        case USER_PASSWORD:
            const {user_password} = action;
            return {...state, UserLogin: user_password.length > 0 ? user_password : null};
        case USER_SUBMIT:
            const {UserLogin, Username} = state;
            const BaseTopics = TopicsContent;
            const InitialTopics = state.topics;
            if (UserLogin === 'admin' && Username === 'admin') {
                return {
                    ...state,
                    Username: 'admin',
                    Admin: true,
                    UserLoggedIn: true,
                    Logged_In: false,
                    topics: InitialTopics.length > 0 ? InitialTopics : BaseTopics
                }
            }
            if (UserLogin === Username) {
                const value = UserLogin;
                const LoginArrow = state.usernames;
                const result = LoginArrow.filter((name) => {
                    return name === value;
                });
                if (result.length > 0) {
                    return {
                        ...state,
                        Username: Username,
                        UserLoggedIn: true,
                        Logged_In: false,
                        topics: InitialTopics.length > 0 ? InitialTopics : BaseTopics
                    }
                }
            }
            return {...state};
        case USER_LOGOUT:
            if(state.Username === 'admin'){
                return {...state, Admin: false, UserLoggedIn: false};
            }
            return {...state, UserLoggedIn: false};
        case USERS_START_LOADING:
            return {...state, UsersLoading: true};
        case USERS_LOADING_SUCCESFUL:
            const peopleLoaded = action.payload;
            if (!state.UsersAlreadyLoaded) {
                let UsersOne = state.users;
                const arrLength = peopleLoaded.length;
                for (let i = 0; i < arrLength; i++) {
                    UsersOne.unshift(peopleLoaded[arrLength - i - 1]);
                }
                return {...state, UserLoading: false, users: UsersOne, UsersAlreadyLoaded: true};
            }
            return {...state};
        case USERS_LOADING_FAILED:
            return {...state, UsersLoading: false, UserLoadingError: action.error, users: []};
        case GET_TOPICS:
            const Content = TopicsContent;
            const {topics} = state;
            return {...state, topics: topics.length > 0 ? topics : Content}
        case ENABLE_COMMENTS:
            let Current_ID = action.status;
            let topic = state.topics;
            let NewTopic = topic.map((obj) => {
                if (obj.id === Current_ID) {
                    obj.showcomments = true
                }
                return obj;
            });
            return {...state, topics: NewTopic};
        case USER_PRESS_LIKE:
            let LikeTopicID = action.LikeId;
            let LikeName = action.LikeUserName;
            let LikeTopic = state.topics;
            let CompletetedLikeTopic = LikeTopic.map((obj) => {
                if (obj.id === LikeTopicID) {
                    obj.like = obj.like + 1;
                    obj.UserNameLikes.push(LikeName);
                }
                return obj;
            });
            return {
                ...state,
                topics: CompletetedLikeTopic
            };
        case USER_PRESS_DIZLIKE:
            let DizLikeTopicID = action.DizLikeId;
            let DizLikeName = action.DizLikeUserName;
            let DizLikeTopic = state.topics;
            let CompletetedDizLikeTopic = DizLikeTopic.map((obj) => {
                if (obj.id === DizLikeTopicID) {
                    obj.dizlike = obj.dizlike + 1;
                    obj.UserNameLikes.push(DizLikeName);
                }
                return obj;
            });
            return {
                ...state,
                topics: CompletetedDizLikeTopic
            };
        case ADD_NEW_TOPIC:
            return {...state, AddNewTopic: true}
        case ADD_NEW_TOPIC_BODY:
            const ContentTopicBody = action.ContentBody;
            return {...state, TopicBody: ContentTopicBody};
        case ADD_NEW_TOPIC_HEADER:
            const ContentTopicHeader = action.ContentHeader;
            return {...state, TopicHeader: ContentTopicHeader};
        case NO_ADDING_NEW_TOPIC:
            return {...state, AddNewTopic: false};
        case ACCEPT_NEW_TOPIC:
            const {TopicBody, TopicHeader} = state;
            const NextTopics = state.topics;
            let nextId=NextTopics.length+1;
            NextTopics.push({id: nextId,
                             author: state.Username,
                             comments: [],
                             showcomments: false,
                             like: 0,
                             dizlike: 0,
                             UserNameLikes: [state.Username],
                             head: TopicHeader,
                             topic: TopicBody,
             });
            return {...state, topics: NextTopics, AddNewTopic: false
            };
        case COMMENTS_START_LOADING:
            return {...state, CommentsLoading: true};
        case COMMENTS_LOADING_SUCCESFUL:
            const FirstComments = action.payload;
            if (!state.CommentsLoaded) {
                let UserTopics=state.topics;
                const CommentedTopics=UserTopics.map((item)=>{
                    for (let i=0; i<5; i++) {
                    item.comments.push(FirstComments[i]);}///дописать эту функцию!!!
                    return item;
                });
                return {...state,
                           CommentsLoading: false,
                           comments: FirstComments,
                           CommentsLoaded: true,
                           topics: CommentedTopics};
            }
            return {...state};
        case COMMENTS_LOADING_FAILED:
            return {...state, CommentsLoading: false, CommentsLoadingError: action.error, comments:[]};
        case CLOSE_COMMENTS:
            let Topic_ID = action.topicID;
            let CurrentTopic = state.topics;
            let FinalTopic = CurrentTopic.map((obj) => {
                if (obj.id === Topic_ID) {
                    obj.showcomments = false
                }
                return obj;
            });
            return {...state, topics: FinalTopic};
        case ADD_COMMENT:
            let ComID = action.CommentTopicID;
            let Commenting_Topic = state.topics;
            let  CommentedTopic = Commenting_Topic.map((obj) => {
                if (obj.id === ComID) {
                    obj.addComment = true
                }
                return obj;
            });
            return {...state, topics: CommentedTopic};
        case NO_ADDING_COMMENT:
            let CommentID = action.CommentTopicID;
            let NoCommenting_Topic = state.topics;
            let  NoCommentedTopic = NoCommenting_Topic.map((obj) => {
                if (obj.id === CommentID) {
                    obj.addComment = false
                }
                return obj;
            });
            return {...state, topics: NoCommentedTopic};
        case GET_COMMENT_BODY:
            let CommentBody=action.CommentBody;
            return {...state, CommentBody: CommentBody};
        case ACCEPT_NEW_COMMENT:
            let AcceptID = action.CommentTopicID;
            let AcceptCommenting_Topic = state.topics;
            let Comment = state.CommentBody;
            let CurrentUserEmail=state.users.filter((item)=>{
                if (item.name === state.Username)
                {return item.email};
            });
            let CurrentEmail = CurrentUserEmail[0].email;
            let  AcceptCommentedTopic = AcceptCommenting_Topic.map((obj) => {
                    if (obj.id === AcceptID) {
                    obj.addComment = false;
                    obj.comments.unshift({email: CurrentEmail, body: Comment});
                }
                return obj;
            });
            return {...state, topics: AcceptCommentedTopic, CommentBody: ''};
//ИЗОБРАЖЕНИЯ
        case IMAGES_START_LOADING:
            return {...state, ImagesLoading: true};
        case IMAGES_LOADING_SUCCESFUL:
            const ImagesLoaded = action.payload;
            if (!state.ImagesAlreadyLoaded) {
                let ImagesOne = state.images;
                for (let i = 0; i <10; i++) {
                    ImagesOne.unshift(ImagesLoaded[i]);
                }
                return {...state, ImagesLoading: false, images: ImagesOne};
            }
            return {...state};
        case IMAGES_LOADING_FAILED:
            return {...state, ImagesLoading: false, ImagesError: action.error, images:[]};






///********************************************************
        default:
            return state;

    }
}

