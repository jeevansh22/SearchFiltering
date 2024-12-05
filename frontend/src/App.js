import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './components/BlogCard';
import SearchBox from './components/SearchBox';
import './App.css';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async (search = '', category = '') => {
    const response = await axios.get('http://localhost:5000/api/blogs', {
      params: { search, category },
    });
    setBlogs(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="app">
      <h1>Blog Search</h1>
      <SearchBox onSearch={fetchBlogs} />
      <div className="blog-list">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default App;
