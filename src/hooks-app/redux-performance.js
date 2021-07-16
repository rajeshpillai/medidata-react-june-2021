import React, {useState, useEffect} from 'react';
import {createStore, combineReducers} from 'redux';
import {useDispatch, connect, useSelector} from 'react-redux';
import { Provider } from 'react-redux';

const initialState = {
  counter: 1,
  user: {users: [], filteredUsers: []}
};

function counterReducer (state = 1, action) {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

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


const rootReducers = combineReducers({
  counter: counterReducer,
  user: userReducer
});

const store = createStore(rootReducers, initialState);

// Counter Component
function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const intervalId = React.useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      dispatch({type: 'INCREMENT'});
    },500);
    return () => {
      clearInterval(intervalId.current);
    }
  }, [dispatch]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
    </div>
  );
}

// Filtered User component
function FilteredUsers({users}) {
  useEffect(() => {
    console.log("filtered users");
  });

  return (
    <div>
    <h2>Filtered Users</h2>
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
  )
}

// All users
let ReduxApp = function ({users, filteredUsers}) {
  const dispatch = useDispatch();
  
  // const users = useSelector(state => state.user.users)
  // const filteredUsers = useSelector(state => state.user.filteredUsers)

  const [search, setSearch] =useState("");

  useEffect(() => {
    console.log("users");
  });

  useEffect(() => {
    async function doFetch(){
      console.log("fetching users");
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
      <FilteredUsers users={filteredUsers}/>

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

const mapState = (state) => {
  return {
    counter: state.counter,
    users: state.user.users,
    filteredUsers: state.user.filteredUsers
  }
}

ReduxApp = connect(mapState)(ReduxApp);

// The App
export default function ReduxPerformance() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Performance</h1>
        <Counter />
        <ReduxApp />
      </div>  
    </Provider>
  );
}
