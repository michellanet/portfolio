import React from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Col, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import * as languageServices from './../../../services/languageServices';
import LocalStorageService from './../../../utils/localStorage';

const Proficiencies = ['Elementary proficiency', 'Limited working proficiency', 'Professional working proficiency',
  'Full professional proficiency', 'Native or bilingual proficiency'];

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Language',
    path: '/language',
  },
  {
    label: 'New language',
    path: '/language/add',
    active: true
  }
];

class AddLanguage extends React.Component {

  constructor() {
    super();

    this.state = {
      messageVariant: 'danger',
      hasMessage: false,
      messageInfo: ''
    };
  }

  saveHandler = (e) => {
    const userInfo = LocalStorageService.getUserInfo();
    const payload = { 
      user_id: userInfo.userId,
      language: this.state.language,
      proficiency: this.state.proficiency
    };

    languageServices.addLanguage(payload)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/language')
      })
      .catch((error) => {
        this.setState({
          messageVariant: 'danger',
          hasMessage: true,
          messageInfo: error.errors[0].msg
        });
      });
  }

  handleValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Breadcrumbs links={breadcrumbLinks} />
        {  
          this.state.hasMessage ? <Alert variant={this.state.messageVariant}>{this.state.messageInfo}</Alert> : ''
        }
        <Card
          bg='light'
          text='dark'
        >
          <Card.Header>New Language</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Label>Language</Form.Label>
                    <Form.Control onChange={this.handleValueChange} name='language' size='sm' type="text" placeholder="Enter language" />
                  </Col>
                  <Col>
                    <Form.Label>Proficiency</Form.Label>
                    <Form.Control onChange={this.handleValueChange} name='proficiency' size='sm' as="select">
                      <option value='' key='-1'>--- Please select proficiency ---</option>
                      {
                        Proficiencies.map((value, index) => (
                          <option value={value} key={index}>{value}</option>
                        ))
                      }
                    </Form.Control>
                  </Col>
                </Form.Row>
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button size='sm' onClick={this.saveHandler} variant="success" type="submit" className='float-right'>Save</Button>
            <NavLink exact to='/language' className='btn btn-outline-secondary btn-sm float-left'>Back to Language</NavLink>
          </Card.Footer>
        </Card>
      </div>
    );
  }

}

export default AddLanguage;
