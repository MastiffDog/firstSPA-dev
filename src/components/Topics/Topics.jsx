import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {bindActionCreators} from "redux";
import actions from "../../actions/user";
import connect from "react-redux/es/connect/connect";
import Modal from "react-bootstrap/es/Modal";

class TopicsList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.GetTopics();
        this.props.actions.GetComments();
    }


    render() {

        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <div className="TopicsHeader"><h1>Список законченных статей наших писателей:</h1></div>
                    </Col>
                </Row>

                {this.props.topics.map(item => {
                    return (<div key={item.id} className="TopicHead">
                                <Row>
                                    <Col md={12}>
                                        <div>
                                        <div><h1>{item.head}</h1></div>
                                            <div><h2 className='Author'>Автор статьи: {item.author}</h2></div>
                                        <div><p className="topic_Content">{item.topic}</p></div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="ButtonLine">
                                <Row>
                                    <Col md={2}>
                                      <div className="Liked">Хороших оценок: {item.like}</div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="DizLiked">Плохих оценок: {item.dizlike}</div>
                                    </Col>
                                    <Col md={2}>
                                        <Button bsStyle="info" onClick={()=>this.props.actions.ShowComments(item.id)}>Комментарии</Button>
                                    </Col>
                                    <Col md={2}>
                                        {(this.props.UserLoggedIn)&& ((item.UserNameLikes.filter((name)=> {
                                            return name===this.props.Username})).length === 0)&&
                                        <Button bsStyle="success" onClick={()=>this.props.actions.Like(item.id,this.props.Username)}>Нравится!</Button>}
                                    </Col>
                                    <Col md={2}>
                                        {(this.props.UserLoggedIn)&& ((item.UserNameLikes.filter((name)=> {
                                            return name===this.props.Username})).length === 0)&&
                                        <Button bsStyle="danger" onClick={()=>this.props.actions.DizLike(item.id, this.props.Username)}>Не нравится!</Button>}
                                    </Col>
                                    <Col md={2}>
                                        {(this.props.UserLoggedIn)&&<Button bsStyle="primary" onClick={()=>this.props.actions.AddComment(item.id)}>Комментировать</Button>}
                                    </Col>
                                </Row>
                                </div>
                                <div>
                                    {(item.addComment)&&<Modal.Dialog>
                                        <Modal.Header>
                                            <Modal.Title>
                                                <p className="ModalTopicHeader">Добавьте пожалуйста свой комментарий:</p>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div>
                                                <textarea cols="85" rows="5" onChange={(e)=>this.props.actions.GetCommentBody(e.target.value)}></textarea>
                                            </div>
                                        </Modal.Body>

                                        <Modal.Footer>
                                            <Button onClick={()=>this.props.actions.NoAddingComment(item.id)}>Отмена</Button>
                                            <Button bsStyle="primary" onClick={()=>this.props.actions.AcceptNewComment(item.id)}>Добавить комментарий</Button>
                                        </Modal.Footer>
                                    </Modal.Dialog>}
                                </div>
                                <div >
                                       {(item.showcomments)&&(item.comments.map((obj,i) => {
                                        return (
                                            <div key={i} className="commentBody">
                                                <Row>
                                                  <Col md={1}>
                                                    <div>
                                                        <h3 className="ComMail">e-mail:</h3>
                                                    </div>
                                                  </Col>
                                                  <Col md={2}>
                                                    <div>
                                                        <p className="mail">{obj.email}</p>
                                                    </div>
                                                  </Col>
                                                  <Col md={2}>
                                                     <div><h3 className="ComMail">Комментарий:</h3></div>
                                                  </Col>
                                                  <Col md={7}>
                                                     <div className="comment">{obj.body}</div>
                                                  </Col>
                                                </Row>

                                            </div>)}))}
                                 {(item.showcomments)&&
                                    <Row>
                                       <Col md={9}/>
                                       <Col md={3}>
                                           <div className="closeComments">
                                           <Button bsStyle="info" onClick={()=>this.props.actions.closeComments(item.id)}>Свернуть комментарии</Button>
                                           </div>
                                       </Col>
                                    </Row>}
                                </div>
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

const Topics = connect (mapStateToProps, mapDispatchToProps)(TopicsList);

export default Topics;
