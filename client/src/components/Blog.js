import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import '../styles/blog.css';

const Blog = () => {
  
  let articles = require('../articles.json');
  const SIZE = articles.num;

  const article_container = [];

  for (let i = 0; i <= (SIZE - 1); i++) {
    if (SIZE - 1 - i === 0) { // last article
      article_container.push(
        <Row>
          <Col xs={12} md={6}>
            <Card border="secondary" key={articles.blogs[i]}>
              <Card.Header>{articles.blogs[i].date}</Card.Header>
              <Card.Body>
                <Card.Title>{articles.blogs[i].title}</Card.Title>
                <Card.Text>
                    {articles.blogs[i].paragraphs[0]}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      );
    }
    else { 
      article_container.push(
        <Row>
          <Col xs={12} md={6}>
            <Card border="secondary" key={articles.blogs[i]}>
              <Card.Header>{articles.blogs[i].date}</Card.Header>
              <Card.Body>
                <Card.Title>{articles.blogs[i].title}</Card.Title>
                <Card.Text>
                    {articles.blogs[i].paragraphs[0]}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card border="secondary" key={articles.blogs[i + 1]}>
              <Card.Header>{articles.blogs[i + 1].date}</Card.Header>
              <Card.Body>
                <Card.Title>{articles.blogs[i + 1].title}</Card.Title>
                <Card.Text>
                    {articles.blogs[i + 1].paragraphs[0]}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      );
      i++
    }
  }

  return (
    <Container id='blog-container'>
      {article_container.map(article => { return article; })}
    </Container>
  );
};

export default Blog;