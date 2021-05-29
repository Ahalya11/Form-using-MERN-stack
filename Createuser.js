import React,{Component} from 'react';
import axios from 'axios';

export default class Createuser extends Component{
 constructor(props){
    super(props);
        
    this.state={
            fullName:'',
            password:'',
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
 }

handleChange = (event) => {
    this.setState({
     [event.target.name]:event.target.value,
     
 });
}

handleSubmit=(event) => {
    event.preventDefault();
   const info={
       fullName:this.state.fullName,
       password:this.state.password,
   } 
    console.log(info);
    axios.post('http://localhost:3000/users2/add',info)
    .then(response => console.log(response.data))
    .catch(error => console.log(error.response));
    this.setState({
        fullName:'',
        password:'',
    })
}
render(){
    
    return(
        <div className='wrapper'>
        <div className='form-wrapper'>
        <h2>Create Account</h2>
        <form onSubmit={this.handleSubmit} >
        <div className='fullName'>
        <label>Full Name:</label>
        <input type='text' required name='fullName'  value={this.state.fullName} onChange={this.handleChange} noValidate />
        </div><br/>
         <div className='password'>
             <label>Password:</label>
          <input type='password' required name='password'  value={this.state.password} onChange={this.handleChange} noValidate />
        </div><br/>
        <input type="submit" value="Create user" className='submit' />
     </form>
    </div>
    </div>
    );
}
}