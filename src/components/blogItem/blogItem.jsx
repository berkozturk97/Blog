import React from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { history } from "../../App";

const BlogItem = ({ data }) => {
  const goDetail = (item) => {
    history.push({ pathname: "/blogdetail", search: "/" + item._id, state: { item: item } })
  }
  return (
    <Card style={{ width: "600px", height: "300px", margin: "20px" }}>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data.author}</Card.Subtitle>
        <Card.Text>{data.desc}</Card.Text>
        <Button onClick={() => goDetail(data)}>
          Go to Blog
        </Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{data.createdAt}</small>
      </Card.Footer>
    </Card>
  );
};

export default BlogItem;
