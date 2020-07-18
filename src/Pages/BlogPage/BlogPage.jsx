import React, { useEffect, useState } from "react";
import BlogItem from "../../components/blogItem/blogItem";
import BlogDetail from "./BlogDetail";
import { getBlog } from "../../API/blogApi";
import Spinner from "../../components/spinner/spinner";

const BlogPage = () => {
  const [blog, setBlog] = useState([]);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    getBlogs();
    console.log(blog);
  }, []);
  const getBlogs = async () => {
    let responseData = await getBlog();
    if (responseData !== null || responseData !== undefined) {
      setBlog(responseData);
      setVisible(false);
      console.log(responseData);
    }
  };

  const renderBlogs = () => {
    if (visible) return <Spinner />;
    else {
      return blog.map((data, index) => {
        return (
          <BlogItem
            key={index}
            title={data.name}
            author={data.author}
            description={data.desc}
            photoUrl={data.photoUrl}
            content={data.contentText}
            time={data.createdAt}
            data={data}
            id={data._id}
          />
        );
      });
    }
  };

  return (
    <div>
      <h1>Blog Page</h1>
      {renderBlogs()}
      {/* <BlogDetail /> */}
    </div>
  );
};

export default BlogPage;
