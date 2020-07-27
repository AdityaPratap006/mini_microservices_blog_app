import React from "react";

const CommentList = ({ comments }) => {

  const renderedComments = comments.map(comment => {
    let content = '';
    if (comment.status === 'pending') {
      content = 'This comment is awaiting moderation.'
    } else if (comment.status === 'rejected') {
      content = 'This comment has been rejected!';
    } else if (comment.status === 'approved') {
      content = comment.content;
    }

    return <li key={comment.id}>{content}</li>
  });

  return <div>
    <h4> {`${comments.length} ${comments.length !== 1 ? 'Comments' : 'Comment'}`}</h4>
    <ul>
      {renderedComments}
    </ul>
  </div>;
};

export default CommentList;
