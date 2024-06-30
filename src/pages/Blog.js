import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { Grid } from '@mui/material';
import Image1 from "../assets/giorgio-trovato-K62u25Jk6vo-unsplash.jpg";
import SingleBlogCard from '../components/SingleBlogCard';

export const blogPost = {
  title: 'The Power of React Hooks',
  author: 'John Doe',
  date: '2024-04-17',
  slug: 'react-hook',
  content: '<p>React Hooks are a powerful addition to React that allow you...</p>',
  imageUrl: Image1, // Optional image URL
};

const Blog = () => {
  const blogPosts = [blogPost, blogPost, blogPost,blogPost,blogPost,blogPost,blogPost,]; // Add more blog posts here

  return (
    <Grid container spacing={3} sx={{padding:0.1,margin:0.1}}>
      {blogPosts.map((post) => (
        <Grid item key={post.slug} xs={12} sm={6} md={4}>
          <SingleBlogCard post={post}>
            <Link to={`/blog/${post.slug}`}>Read More</Link>  {/* Link to blog detail page */}
          </SingleBlogCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Blog;
