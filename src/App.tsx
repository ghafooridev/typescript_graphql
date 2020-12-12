import React from 'react';
import TodoList from "./todo"
import './App.css';
import {useQuery, gql} from '@apollo/client';

const getTodos = gql`
 query {
  posts {
    data {
      id
      title
      body
    }
  }
}
`;

function App() {
    const {loading, error, data} = useQuery(getTodos);
    console.log(loading, error, data)

    return (
        <div>
            {loading && "loading..."}
            {data && <TodoList data={data.posts.data}/>}
        </div>
    );
}

export default App;
