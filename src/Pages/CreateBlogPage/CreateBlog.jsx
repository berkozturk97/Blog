import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { addBlog } from "../../API/blogApi";

const CreateBlog = () => {
  const [values, setValues] = useState({
    title: "",
    author: "",
    description: "",
    blogPhoto: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const AddBlog = async () => {
    let body = {
      name: values.title,
      author: values.author,
      desc: values.description,
      photoUrl: values.blogPhoto,
      contentText: values.content,
    };
    console.log(body);

    if (
      values.title.trim().length === 0 ||
      values.author.trim().length === 0 ||
      values.description.trim().length === 0 ||
      values.blogPhoto.trim().length === 0 ||
      values.content.trim().length === 0
    ) {
      alert("Make sure that every input field must be filled")
    } else {
      let body = {
        name: values.title,
        author: values.author,
        desc: values.description,
        photoUrl: values.blogPhoto,
        contentText: values.content,
      };
      let responseData = await addBlog({ body: body });
      if (responseData !== null || responseData !== undefined) {
        setValues({
          ...values,
          title: "",
          author: "",
          description: "",
          blogPhoto: "",
          content: "",
        });
        alert('Blog is successfully created!')
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Create Blog</h1>
      <Form onSubmit={handleSubmit} style={{ width: "50rem", margin: "20px",  }}>
        <Form.Group
          controlId="formTitle"
          onChange={handleInputChange}
          value={values.title}
        >
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" type="text" placeholder="Lacrimosa" />
        </Form.Group>

        <Form.Group
          controlId="formAuthor"
          onChange={handleInputChange}
          value={values.author}
        >
          <Form.Label>Author</Form.Label>
          <Form.Control name="author" type="text" placeholder="Wolfgang Amadeus Mozart" />
        </Form.Group>

        <Form.Group
          controlId="formDescription"
          onChange={handleInputChange}
          value={values.description}
        >
          <Form.Label>Text Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Please enter text description"
          />
        </Form.Group>

        <Form.Group
          controlId="formImage"
          onChange={handleInputChange}
          value={values.blogPhoto}
        >
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            name="blogPhoto"
            type="text"
            placeholder="https://www.example.com/photo/mozart"
          />
        </Form.Group>

        <Form.Group
          controlId="formContent"
          onChange={handleInputChange}
          value={values.content}
        >
          <Form.Label>Content</Form.Label>
          <Form.Control
            name="content"
            as="textarea"
            rows="5"
            placeholder="Lacrimosa dies illa
Qua resurget ex favilla
Judicandus homo reus
Lacrimosa dies illa
Qua resurget ex favilla
Judicandus homo reus
Huic ergo parce Deus
Pie Jesu, Jesu Domine
Dona eis requiem
Dona eis requiem
Amen"
          />
        </Form.Group>

        <Button onClick={AddBlog} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateBlog;
