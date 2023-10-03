import React from 'react';
import { render } from '@testing-library/react';
import CommentComponent from './CommentComponent';

test('inserindo dois comentários', () => {
  const comments = ['Primeiro comentário', 'Segundo comentário'];
  const { getByTestId } = render(<CommentComponent comments={comments} />);

  // Verifica se o componente de comentário foi renderizado corretamente
  const commentList = getByTestId('comment-list');
  expect(commentList).toBeInTheDocument();

  // Verifica se os comentários foram inseridos corretamente
  for (let i = 0; i < comments.length; i++) {
    const commentElement = getByTestId(`comment-${i}`);
    expect(commentElement).toBeInTheDocument();
    expect(commentElement.textContent).toBe(comments[i]);
  }
});
