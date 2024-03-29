import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const base_url = "http://localhost:3010/";

const AddBlog = () => {
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    image: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${base_url}blogs/new`, newBlog)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      setNewBlog({
        title: "",
        content: "",
        image: "",
      });
      const response = await axios.get(`${base_url}blogs`);
      console.log(response.data);
    } catch (error) {
      console.error("Error adding new memory:", error);
    }
  };
  return (
    <div>
      <form className="border w-fit mx-auto" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="border block"
          value={newBlog.title}
          onChange={handleInputChange}
        />
        <label>Content</label>
        <input
          type="text"
          name="content"
          className="border block"
          value={newBlog.content}
          onChange={handleInputChange}
        />
        <label>Image</label>
        <input
          type="file"
          className="border block"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddBlog;
