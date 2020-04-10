import React, { useEffect } from 'react';
import axios from 'axios';
import { usePostDispatch, usePostState } from '../state/PostContext';

interface Post {
  body: string;
  title: string;
  userId: any;
}

const Blog: React.SFC = () => {
  const postDispatch = usePostDispatch();
  const { authors, posts } = usePostState();

  useEffect(() => {
    const updatePosts = async () => {
      const posts = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      postDispatch({ type: 'update', payload: posts.data });
    };

    const updateAuthors = async () => {
        const posts = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        );
        postDispatch({ type: 'updateAuthors', payload: posts.data });
    };

    updatePosts();
    updateAuthors();
  }, [postDispatch]);

  return (
    <main>
      {posts.length &&
        posts.map((post: Post) => (
          <article>
            <h3> {post.title} </h3>
            <p>
              {(() => {
                if (authors.find((author: any) => post.userId === author.id)) {
                  return authors.find(
                    (author: any) => post.userId === author.id
                  ).name;
                }
              })()}
            </p>
            <div> {post.body} </div>
          </article>
        ))}
    </main>
  );
};

export default Blog;
