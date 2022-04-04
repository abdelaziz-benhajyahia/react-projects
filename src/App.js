import './App.css';
import React from 'react';
import { Container, Form, Nav, Navbar, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar bg="danger" variant="dark">
          <Container>
            <Navbar.Brand href="#home">HomePage</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">History</Nav.Link>
              <Nav.Link href="#features">First Team</Nav.Link>
              <Nav.Link href="#pricing">Fans</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div class="css_carousel">
        <Carousel>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="/pictures/football1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Football ball</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/pictures/football2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Liverpool fans</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/pictures/football3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>From the last game</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div class="div_form">
      <Form>
        <h3 class="text-danger">Be part of the club</h3>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
      </div>
    </div>
  );
}

export default App;
