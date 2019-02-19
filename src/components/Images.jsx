import React from 'react';
import {Carousel, Col, Image, Row} from 'react-bootstrap';
import {bindActionCreators} from "redux";
import actions from "../actions/user";
import connect from "react-redux/es/connect/connect";
import admin from "../images/admin.png";



class Pictures extends React.Component {
    constructor(props) {
        super(props);
    }

componentDidMount() {
     this.props.actions.GetImages ();
}

    render() {

        return ( <Carousel>
            {this.props.images.map((image, i) => {
                return ( <Carousel.Item key={i}>
                    <center><img width={600} height={600} alt="Изображение" src={image.url}/></center>
                           <Carousel.Caption>
                            <h3>{image.title}</h3>
                              </Carousel.Caption>
                        </Carousel.Item>)})}
               </Carousel>
        )
    }
}

const mapStateToProps = state => ({...state.user});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const Images = connect (mapStateToProps, mapDispatchToProps)(Pictures);

export default Images;
