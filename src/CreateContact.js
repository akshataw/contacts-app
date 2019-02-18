import React from 'react';
import serializeForm from 'form-serialize'
import ContactList from './ContactList';
import { Link } from 'react-router-dom';

class CreateContact extends React.Component{
/*  handleAdd = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
     if (this.props.onCreate) {
      this.props.onCreate(values);
    }
  }*/
  componentWillMount(){
    this.setState({
      id: "",
      name: this.props.name,
      handle: ""
    });
  }

  handleSuccess = () => {
    alert("Yeah, Contact added successfully!");
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addContacts(this.state)
  }

  handleChange(data) {
    let state = this.state;
    let id = data.target.id;
    let name = data.target.name;
    let handle = data.target.handle;
    state[id] = data.target.value;
    state[name] = data.target.value;
    state[handle] = data.target.value;
    this.setState(state);
  }

  render(){
    const { contacts } = this.props
    return(
      <div className="container">
       <div className="well">
        <div className="header" Style="font-size:25px;">
        <Link to="/">
         <img src="/back.png" alt="back" Style="height:50px; width:50px;" />
        </Link>&nbsp;
        <h3>Create Contact</h3>
        </div>
        <br/>
        <form className="create-form" onSubmit={this.handleSubmit}>
         <div className="create-contact-details">
          <div className="media">
           <div className="media-left">
           <img src="/user-icon.png" alt="User-Icon" height="50px" width="50px" />
          </div>
           <div className="media-body">
           <input type="text" name="id" placeholder="Id" value={this.props.id}
                  onChange={this.handleChange.bind(this)} />
           <br/>
           <br/>
            <input type="text" name="name" placeholder="Name" value={this.props.name}
					         onChange={this.handleChange.bind(this)} />
            <br/>
            <br/>
            <input type="text" name="handle" placeholder="Handle" value={this.props.handle}
                   onChange={this.handleChange.bind(this)} />
            <br/>
            <br/>
            <button id="save-contact" className="btn btn-primary" onClick={this.handleSuccess}>Add Contact</button>
           </div>
          </div>
         </div>
        </form>
       </div>
      </div>
    )
  }
}

export default CreateContact;
