import React, { useEffect } from 'react';
import axios from 'axios';
import { usePostDispatch, usePostState } from '../state/PostContext';

interface Post {
  body: string;
  title: string;
}

const Blog: React.SFC = () => {
  const postDispatch = usePostDispatch();
  const posts = usePostState();
  console.log(posts);

  useEffect(() => {
    const updatePosts = async () => {
      const posts = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      postDispatch({ type: 'update', posts: posts.data });
    };

    updatePosts();
  }, [postDispatch]);

  return (
    <main>
      {posts.length &&
        posts.map((post: Post) => (
          <article>
            <h3> {post.title} </h3>
            <div> {post.body} </div>
          </article>
        ))}
    </main>
  );
};

export default Blog;
