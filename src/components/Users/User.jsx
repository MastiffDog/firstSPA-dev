import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Grid, Row, Col, Button} from 'react-bootstrap';
export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Grid>
              <div className="User">
              <Row>
              <Col md={3}>
                <div>Имя пользователя: {this.props.data.name}</div>
              </Col>
              <Col md={3}>
                  <div>Телефон пользователя: {this.props.data.phone}</div>
              </Col>
              <Col md={3}/>
              <Col md={3}>
               <LinkContainer to="/users">
                <Button bsStyle="success">Перейти назад</Button>
               </LinkContainer>
              </Col>
              </Row>
            </div>
            </Grid>
        )
    }
}