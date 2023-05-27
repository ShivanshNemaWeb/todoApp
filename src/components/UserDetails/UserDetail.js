import React from "react";
import './UserDetail.css'
const UserDetail=(props)=>{
    return(<>
    <div className="profile-cards ">
<h3><span className="text-white">User</span> <span className="text-warning">Details</span></h3>
<div className="card card-1 shadow-lg p-3 mb-5 bg-white rounded">

  <div class="card-description">
   <p><span className="text-primary text-left">Todo id :</span> <strong>{props.todo.id}</strong></p>
   <p> <span className="text-primary text-left">ToDo Title :</span><strong> {props.todo.title}</strong></p>
   <p><span className="text-primary text-left">User Id :</span> <strong>{props.todo.userId}</strong></p>
   <p><span className="text-primary text-left">Name :</span> <strong>{props.user.name}</strong></p>
   <p><span className="text-primary text-left">Email :</span> <strong>{props.user.email}</strong></p>
  </div>
</div>



</div>
    </>);
}
export default UserDetail;