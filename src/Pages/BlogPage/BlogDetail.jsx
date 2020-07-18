import React, { useEffect, useState } from "react";

import { getSelectedBlog } from "../../API/blogApi";
import { BlogDetailItem } from "../../components/blogItem/blogDetail";
import Spinner from "../../components/spinner/spinner";

const BlogDetail = (props) => {
  const [blog, setBlog] = useState([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    getBlog();
  }, []);
  const getBlog = async () => {
    console.log(props.location.state.item);
    let body = { _id: props.location.state.item._id };
    let responseData = await getSelectedBlog({ body: body });
    if (responseData !== null || responseData !== undefined) {
      setBlog(responseData);
      setVisible(false);
      console.log(responseData);
    }
  };
  const renderItem = () => {
    if (visible) return <Spinner />;
    else {
      return blog.map((data, index) => {
        return <BlogDetailItem key={index} data={data} />;
      });
    }
  };
  return <div>{renderItem()}</div>;
};

export default BlogDetail;
