import React from 'react';
const PostStateContext = React.createContext({} as any);
const PostDispatchContext = React.createContext({} as any);

enum actionTypes {
  updatePosts = 'update',
}

function postReducer(state: any, action: { posts: any[]; type: actionTypes }) {
  switch (action.type) {
    case 'update': {
      return action.posts;
    }
    default: {
      return state;
      // throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function PostProvider({ children }: { children: React.ReactNode }): any {
  const [state, dispatch] = React.useReducer(postReducer, { posts: [] });
  return (
    <PostStateContext.Provider value={state}>
      <PostDispatchContext.Provider value={dispatch}>
        {children}
      </PostDispatchContext.Provider>
    </PostStateContext.Provider>
  );
}

function usePostState() {
  const context = React.useContext(PostStateContext);
  if (context === undefined) {
    throw new Error('usePostState must be used within a PostProvider');
  }
  return context;
}

function usePostDispatch() {
  const context = React.useContext(PostDispatchContext);
  if (context === undefined) {
    throw new Error('usePostDispatch must be used within a PostProvider');
  }
  return context;
}
export { PostProvider, usePostState, usePostDispatch };
