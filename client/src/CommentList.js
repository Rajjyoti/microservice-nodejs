import React from "react";

const CommentList = ({ comments }) => {

  const renderedComments = comments.map((comment) => {
    let content
    if(comment.status === 'approved') {
      content = comment.content
    }

    if (comment.status === 'pending') {
      content = 'This comment is awaiting approval'
    }

    if (comment.status === 'rejected') {
      content = 'This comment was removed for violating policy'
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
