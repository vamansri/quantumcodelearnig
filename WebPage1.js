import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import './App.css'

function WebPage1(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false)
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  })
  const handleInput = (e) => {
    const { name, value } = e.target
    setFormdata({
      ...formdata,
      [name]: value
    })
  }




  const toggle = (e) => {
    // e.preventDefault();
    setModal(!modal);
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post('http://localhost:5001/register', formdata)
      console.log(res)
    }
    catch (err) {
      throw err
    }
  }


  return (
    <div className='container'>
      <Navbar {...args}>
        <NavbarBrand href="/">QUANTUM CODE</NavbarBrand>
        <div>
          <Button color="light" onClick={toggle}>
            NEW REGISTRATION
          </Button>
          <Modal isOpen={modal} toggle={toggle} fullscreen>
            <ModalHeader toggle={toggle}>Register</ModalHeader>
            <ModalBody>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">
                        Email
                      </Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                        value={formdata.email}
                        onChange={handleInput}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">
                        Password
                      </Label>
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                        value={formdata.password}
                        onChange={handleInput}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="exampleAddress">
                    Address
                  </Label>
                  <Input
                    id="exampleAddress"
                    name="address"
                    placeholder="1234 Main St"
                    value={formdata.address}
                    onChange={handleInput}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleAddress2">
                    Address 2
                  </Label>
                  <Input
                    id="exampleAddress2"
                    name="address2"
                    placeholder="Apartment, studio, or floor"
                    value={formdata.address2}
                    onChange={handleInput}
                    required
                  />
                </FormGroup>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleCity">
                        City
                      </Label>
                      <Input
                        id="exampleCity"
                        name="city"
                        value={formdata.city}
                        onChange={handleInput}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleState">
                        State
                      </Label>
                      <Input
                        id="exampleState"
                        name="state"
                        value={formdata.state}
                        onChange={handleInput}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="exampleZip">
                        Zip
                      </Label>
                      <Input
                        id="exampleZip"
                        name="zip"
                        value={formdata.zip}
                        onChange={handleInput}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup check>
                  <Input
                    id="exampleCheck"
                    name="check"
                    type="checkbox"
                  />
                  <Label
                    check
                    for="exampleCheck"
                  >
                    Check me out
                  </Label>
                </FormGroup>
                <Button type='submit'>
                  Sign in
                </Button>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Do Something
              </Button>{' '}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem className="me-2">
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem className="me-2">
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText> simple teext</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default WebPage1;