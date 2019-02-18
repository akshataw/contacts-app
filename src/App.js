import React, { Component } from 'react';
import ContactList from './ContactList';
import * as ContactsAPI from './ContactsAPI';
import CreateContact from './CreateContact';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    contacts : [
      {
        id: 'akshu',
        name: 'Akshata',
        handle: '@akshu'
      },
      {
        id: 'sneha',
        name: 'Snehal',
        handle: '@sneha'
      },
      {
        id: 'mandy',
        name: 'Mandar',
        handle: '@mandy'
      }
    ]
  }

  ComponentDidMount(){
    ContactsAPI.getAll().then((contacts) => {
      this.setState(() => ({
        contacts
      }))
    })
  }

  addContact = (user) => {
    let contacts = this.state.contacts
    contacts.push(user);
    this.setState({
      contacts: contacts
    })
  }

  removeContact = (contact) => {
    this.setState((currState) => ({
      contacts: currState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
      ContactsAPI.remove(contact)
  }

   /*createContact = (contact) => {
     ContactsAPI.create(contact).then((contact) => {
       this.setState((currState) =>({
         contacts: currState.contacts.concat([contact])
       }))
     })
   }*/

    render() {
    return (
      <div className="App">
       <div className="well">
        <h2 className="text-center">Contacts</h2>
       </div>
        <Route exact path='/' render={() => (
          <ContactList contacts={this.state.contacts} onDeleteContact={this.removeContact} />
        )} />
        <Route path='/create' render={() => (
          <CreateContact contacts={this.state.contacts} addContacts={this.addContact} />
        )} />
      </div>
    );
  }
}

export default App;
