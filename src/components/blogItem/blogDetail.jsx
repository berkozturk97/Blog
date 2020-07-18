import React from 'react';

import Card from "react-bootstrap/Card";

export const BlogDetailItem = ({ data }) => {
    return(
        <Card style={{ width: "60rem" }}>
        <Card.Img style={{width: "200px", height: "100px", alignSelf: "center"}} variant="top" src={require("../../logo.svg")} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{data.author}</Card.Subtitle>
          <Card.Text>{data.desc}</Card.Text>
          <Card.Body>
            {data.contentText}
          </Card.Body>
        </Card.Body>
      </Card>
    );
}