import React, {useState, useEffect} from 'react';
import {createStore} from 'redux';
import {useDispatch, connect, useSelector} from 'react-redux';
import { Provider } from 'react-redux';

const initialState = {
  users: [],
  filteredUsers: []
};

function userReducer(state = initialState, action) {
  switch(action.type){
    case 'ADD_USER':
      break;
    case 'REMOVE_USER':
      break;
    case 'UPDATE_USER':
      break;
    case 'FETCH_USERS_SUCCESS':
      return {  
        ...state,
        users: action.users
      };
    case 'FETCH_FILTERED_USERS_SUCCESS':
      return {  
        ...state,
        filteredUsers: action.users
      };
    case 'FETCH_USERS_FAILURE':
      break;
    case 'FETCH_USERS_REQUEST':
      break;
    default:  
      return state;
  }
}


const getAllUsers = async (dispatch) => {
  try { 
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    dispatch({type: 'FETCH_USERS_SUCCESS', users});
  } catch(error) {
    dispatch({type: 'FETCH_USERS_FAILURE', error});
  }
};


const store = createStore(userReducer, initialState);


function ReduxApp() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)
  const filteredUsers = useSelector(state => state.filteredUsers)
  const [search, setSearch] =useState("");

  useEffect(() => {
    async function doFetch(){
      await getAllUsers(dispatch)
    }
    doFetch();
  },[dispatch]);


  const handleChange = (e) => { 
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    const url = `https://jsonplaceholder.typicode.com/users?`;  
    fetch(url + `name_like=${search}`) 
      .then(response => response.json())  
      .then(users => dispatch({type: 'FETCH_FILTERED_USERS_SUCCESS', users})); 
  };

  return (
    <div>
      <h2>Users</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder ="search by name" value={search} onChange={handleChange}/>
      </form>
      <h2>Filtered Users</h2>
      {
        filteredUsers.map(user => {
          return (
            <div key={user.id}>
              <p>{user.name} - {user.email}</p>
            </div>
          )
        })   
      }

      <h2>All Users</h2>
      {
        users.map(user => {
          return (
            <div key={user.id}>
              <p>{user.name} - {user.email}</p>
            </div>
          )
        })   
      }
    </div>
  );
}


export default function ReduxPerformance() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Performance</h1>
        <ReduxApp />
      </div>  
    </Provider>
  );

}
