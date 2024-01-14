import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function LocalStorage() {
  return (
    <>
      <ListGroup horizontal className="justify-content-md-center">
        <ListGroup.Item action variant="light">
          Toronto
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Paris
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          London
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Sydney
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          San Francisco
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

// https://react-bootstrap.netlify.app/docs/components/list-group
