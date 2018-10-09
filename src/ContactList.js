import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ContactList extends React.Component{
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  clearQuery = () => {
    this.updateQuery('')
  }

  render(){
    const { query } = this.state
    const { contacts, onDeleteContact } = this.props
    const showingContacts = query === '' ? contacts : contacts.filter((c) => (
      c.name.toLowerCase().includes(query.toLowerCase())
    ))
    return(
      <div className="container" Style="font-family:cursive;">
       <div className="well">
        <div>
        <input type="text" className="search-contacts" placeholder="Search" value={query}
        Style="border: 2px solid #ccc; height:30px; width:220px; border-radius: 6px"
         onChange={(event) => this.updateQuery(event.target.value)} />
       </div>
       <Link to="/create" Style="float:right; font-size:20px;" className="add-contact">Add</Link>
       <br/>
       </div>
       {showingContacts.length !== contacts.lenth && (
         <div className="showing-contacts" Style="font-size:18px;">
          <span>Now showing {showingContacts.length} of {contacts.length}</span>
          <a Style="margin-left:5px;" onClick={this.clearQuery}>Show All</a>
         </div>
       )}
       {showingContacts.length == 0 && (
         <div className="show-error" Style="font-size:20px;">
          <span>Oops, Contacts Not Found!</span>
         </div>
       )}
       <br/>
       <div className="well">
        <ul className="contact-list">
         {showingContacts.map((contact) => (
           <li key={contact.id} className="contacts-list-item">
             <div className="media-right">
              <img src="/user-icon.png" alt={contact.name} height="50px" width="50px" />
             </div>
             <div className="media-body">
              <h4>{contact.name}</h4>
              <h6>{contact.handle}</h6>
             </div>
             <div className="media-left">
              <button className="btn btn-success" onClick={() => onDeleteContact(contact)}
              Style="font-size: 18px; font-weight: bold; border-radius: 50px">X</button>
             </div>
           </li>
         ))}
        </ul>
        </div>
      </div>
    )
  }
}

export default ContactList;
