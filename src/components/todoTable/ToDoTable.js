// import React, { useState, useEffect } from 'react';
// import { Table, Pagination , Button} from 'react-bootstrap';
// import './TodoTable.css';
// import UserDetail from '../UserDetails/UserDetail';
// const TodoTable = () => {
//   const [todos, setTodos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [todosPerPage] = useState(5);
//   const [user,setUser]= useState({});
//   const [userTodo,setUserTodo]=useState({});
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(data => setTodos(data));
//   }, []);

//   // Pagination
//   const indexOfLastTodo = currentPage * todosPerPage;
//   const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//   const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

//   const paginate = pageNumber => setCurrentPage(pageNumber);
  
//   //fetching User
//   const fetchUser=(todo)=>{
//     fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)
    
//     .then(response => response.json())
//       .then(data => {
//         setUser(data);
//         setUserTodo(todo);
//       });
   
//   }
//   return (
//     <div className='main'>
//         <div className='left'>
//           <div className='header'>
//           <div className='title'>
//             <h3>To<span className='text-primary'>Dos</span></h3>
//           </div>
//             <div className='search'>
//            <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
//             <div class="input-group">
//               <input type="search" placeholder="Search" aria-describedby="button-addon1" class="form-control border-0 bg-light"/>
//               <div class="input-group-append">
//                 <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
//               </div>
//             </div>
//           </div>
//             </div>
//              </div>
//         <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>ToDo ID</th>
//             <th>Title</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentTodos.map(todo => (
//             <tr key={todo.id}>
//               <td>{todo.id}</td>
//               <td>{todo.title}</td>
//               <td>{todo.completed?(<><span className='text-success'>Completed</span></>):(<><span className='text-danger'>Incomplete</span></>)}</td>
//               <td><button className="btn btn-outline-info" onClick={()=>fetchUser(todo)}>View User</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <div className='pagination'>
        
//       <Pagination>
//         <Pagination.Prev
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         />
//         <Pagination.Next
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={currentPage === Math.ceil(todos.length / todosPerPage)}
//         />
//       </Pagination>
//       </div>
//     </div>
//     <div className='right'>
//         <UserDetail user={user} todo={userTodo}/>
//     </div>
//     </div>

//   );
// };

// export default TodoTable;

// import React, { useState, useEffect } from 'react';
// import { Table, Pagination, Button } from 'react-bootstrap';
// import './TodoTable.css';
// import UserDetail from '../UserDetails/UserDetail';

// const TodoTable = () => {
//   const [todos, setTodos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [todosPerPage] = useState(5);
//   const [user, setUser] = useState({});
//   const [userTodo, setUserTodo] = useState({});
//   const [searchKeyword, setSearchKeyword] = useState('');

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(data => setTodos(data));
//   }, []);

//   // Pagination
//   const indexOfLastTodo = currentPage * todosPerPage;
//   const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//   const currentTodos = todos
//     .filter(todo => todo.title.toLowerCase().includes(searchKeyword.toLowerCase()))
//     .slice(indexOfFirstTodo, indexOfLastTodo);

//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   // Fetching User
//   const fetchUser = (todo) => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)
//       .then(response => response.json())
//       .then(data => {
//         setUser(data);
//         setUserTodo(todo);
//       });
//   };

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchKeyword(e.target.value);
//   };

//   return (
//     <div className='main'>
//       <div className='left'>
//         <div className='header'>
//           <div className='title'>
//             <h3>To<span className='text-primary'>Dos</span></h3>
//           </div>
//           <div className='search'>
//             <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
//               <div className="input-group">
//                 <input
//                   type="search"
//                   placeholder="Search"
//                   aria-describedby="button-addon1"
//                   className="form-control border-0 bg-light"
//                   value={searchKeyword}
//                   onChange={handleSearchChange}
//                 />
//                 <div className="input-group-append">
//                   <button id="button-addon1" type="submit" className="btn btn-link text-primary">
//                     <i className="fa fa-search"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>ToDo ID</th>
//               <th>Title</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentTodos.map(todo => (
//               <tr key={todo.id}>
//                 <td>{todo.id}</td>
//                 <td>{todo.title}</td>
//                 <td>
//                   {todo.completed ? (
//                     <span className='text-success'>Completed</span>
//                   ) : (
//                     <span className='text-danger'>Incomplete</span>
//                   )}
//                 </td>
//                 <td>
//                   <button className="btn btn-outline-info" onClick={() => fetchUser(todo)}>
//                     View User
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//         <div className='pagination'>
//           <Pagination>
//           <Pagination.Prev
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         />
//         <Pagination.Next
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={currentPage === Math.ceil(todos.length / todosPerPage)}
//         />
//       </Pagination>
//       </div>
//     </div>
//     <div className='right'>
//         <UserDetail user={user} todo={userTodo}/>
//     </div>
//     </div>

//   );
// };

// export default TodoTable;


import React, { useState, useEffect } from 'react';
import { Table, Pagination, Button } from 'react-bootstrap';
import './TodoTable.css';
import UserDetail from '../UserDetails/UserDetail';

const TodoTable = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);
  const [user, setUser] = useState({});
  const [userTodo, setUserTodo] = useState({});
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  // Pagination
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos
  //search
    .filter(todo => {
      const searchValue = searchKeyword.toLowerCase();
      return (
        todo.title.toLowerCase().includes(searchValue) ||
        String(todo.userId).includes(searchValue) ||
        (searchValue === 'incomplete' && !todo.completed) ||
        (searchValue === 'completed' && todo.completed)
      );
    })
    .slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Fetching User
  const fetchUser = todo => {
    fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setUserTodo(todo);
      });
  };

  // Handle search input change
  const handleSearchChange = e => {
    setSearchKeyword(e.target.value);
  };

  return (

    <div className='main'>
<div className='bg'>
  <img src="https://static.vecteezy.com/system/resources/previews/006/852/804/original/abstract-blue-background-simple-design-for-your-website-free-vector.jpg" alt=""/>
</div>
      <div className='left' >
        <div className='header'>
          <div className='title'>
            <h3><span className='text-white'>To</span><span className='text-warning'>Dos</span></h3>
          </div>
          <div className='search'>
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Search"
                  aria-describedby="button-addon1"
                  className="form-control border-0 bg-light"
                  value={searchKeyword}
                  onChange={handleSearchChange}
                />
                <div className="input-group-append">
                  <button id="button-addon1" type="submit" className="btn btn-link text-primary">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Table bordered hover style={{color:'white'}}>
          <thead>
            <tr>
              <th className='text-warning'>ToDo ID</th>
              <th className='text-warning'>Title</th>
              <th className='text-warning'>Status</th>
              <th className='text-warning'>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentTodos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td className='text-white'><strong>{todo.title}</strong></td>
                <td>
                  {todo.completed ? (
                    <span className='text-info'> <strong>Completed</strong></span>
                  ) : (
                    <span className='text-danger'><strong>Incomplete</strong></span>
                  )}
                </td>
                <td>
                  <button className="btn btn-primary" onClick={() => fetchUser(todo)}>
                    View User
                    </button>
               </td>
             </tr>
            ))}
          </tbody>
        </Table>
        <div className='pagination'>
          <Pagination>
          <Pagination.Prev
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        />
        <Pagination.Next
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(todos.length / todosPerPage)}
        />
      </Pagination>
      </div>
    </div>
    <div className='right'>
        <UserDetail user={user} todo={userTodo}/>
    </div>
    </div>

  );
};

export default TodoTable;
