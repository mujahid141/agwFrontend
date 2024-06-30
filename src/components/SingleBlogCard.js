import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const SingleBlogCard = ({ post }) => {
  const navigate = useNavigate(); // Get navigation function directly inside the component

  // Handle potential missing data gracefully
  if (!post) {
    return <div>Loading blog details...</div>;
  }

  const { title, imageUrl, content, slug } = post;

  const handleBlogClick = () => {
    navigate(`/blog/${slug}`); // Navigate to details route
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title + ' blog post'}
        sx={{ height: 140 }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          <Link href={`/blog/${slug}`} underline="none" onClick={handleBlogClick}>
            {title}
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content?.slice(0, 150) + '...'} {/* Truncate details for preview */}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleBlogClick}>
        <Link to={`/blog/${post.slug}`}>Read More</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default SingleBlogCard;
