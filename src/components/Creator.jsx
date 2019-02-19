import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import avatar from '../images/avatar.jpg'


export default class Creator extends React.Component {
    constructor(props) {
        super(props); // вызываем конструктор наследуемого класса React.Component
       }

    render() {
        return <Grid>
            <Row>
                <Col md={5}>
                    <Image src={avatar} className="avatar" rounded />
                </Col>
                <Col md={7}>
                    <div>
                        <p className="Creator">Здравствуйте! Меня зовут Петр Константинович Гаврилов. В 36 лет я решил
                            освоить Web-программирование на языке Javascript. Данный сайт является моей первой работой
                            c такими инструментами как: </p>
                        <ul>
                            <li className="Creator">Javascript</li>
                            <li className="Creator">React-Router</li>
                            <li className="Creator">React-Bootstrap</li>
                            <li className="Creator">React</li>
                            <li className="Creator">Redux</li>
                            <li className="Creator">Node JS</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Grid>;
    }}
