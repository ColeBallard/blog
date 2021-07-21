import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import md from '../articles/test.md';
import '../styles/blog.css';

const Blog = () => {
  

  return (
    <Container id='blog-container'>
      <Row>
        <Col xs={6} md={3}>
          <Card border="secondary">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Secondary Card Title</Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card border="secondary">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Secondary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card border="secondary">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Secondary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card border="secondary">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Secondary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;