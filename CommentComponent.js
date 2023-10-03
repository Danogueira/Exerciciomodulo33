import React from 'react';

const CommentComponent = ({ comments }) => {
  return (
    <div data-testid="comment-list">
      {comments.map((comment, index) => (
        <div key={index} data-testid={`comment-${index}`}>
          {comment}
        </div>
      ))}
    </div>
  );
};

export default CommentComponent;
