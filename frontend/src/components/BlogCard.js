import React from 'react';
import '../App.css'
const BlogCard = ({ blog }) => (
  <div className="blog-card">
    <h3>{blog.title}</h3>
    <p>{blog.content.substring(0, 100)}...</p>
    <small>Category: {blog.category}</small>
  </div>
);

export default BlogCard;
