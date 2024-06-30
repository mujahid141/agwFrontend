import React from 'react';
import { Card, CardContent, CardMedia, Typography, Divider } from '@mui/material';

const SingleBlogDetails = ({ post }) => {
  // Handle potential missing data gracefully
  if (!post) {
    return <div>Loading blog post details...</div>;
  }

  const { title, author, date, content, imageUrl } = post;

  return (
    <Card sx={{ maxWidth: 700, margin: 'auto' }}>  {/* Set max width and center */}
      {imageUrl && (
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title + ' blog post'}
          sx={{ height: 300 }}
        />
      )}
      <CardContent>
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`By ${author} on ${date}`}
        </Typography>
        <Divider sx={{ margin: '1rem 0' }} /> {/* Add a divider */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </CardContent>
    </Card>
  );
};

export default SingleBlogDetails;
