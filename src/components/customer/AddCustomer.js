import React, { Component } from 'react'
import TextInputGroup from '../layouts/TextInputGroup';
import { connect } from 'react-redux';
import { addContact } from '../../actions/CustomerAction';

class AddCustomer extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        username:'',
        errors: {}
      };
    
      onSubmit = (e) => {
        e.preventDefault();
    
        const { name, email, phone,username } = this.state;
    
        // Check For Errors
        if (name === '') {
          this.setState({ errors: { name: 'Name is required' } });
          return;
        }
    
        if (email === '') {
          this.setState({ errors: { email: 'Email is required' } });
          return;
        }
    
        if (phone === '') {
          this.setState({ errors: { phone: 'Phone is required' } });
          return;
        }
    
        if (username === '') {
            this.setState({ errors: { username: 'Username is required' } });
            return;
          }
          const newContact = {
            name,
            email,
            phone
          };
      
          //// SUBMIT CONTACT ////
          this.props.addContact(newContact);
      
      
          // Clear State
          this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
          });
      
          this.props.history.push('/');
        };
      onChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        const { name, email, phone, errors ,username} = this.state;

        return (
            <div> 
                <div className="card mb-3">
        <div className="card-header">Add Contact</div>
      
        <img class="card-img" src="https://images.pexels.com/photos/754262/pexels-photo-754262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
        alt="Card image cap" max-height= "20%"></img>
        <div class="card-img-overlay">
        <div className="card-body">
        <br/>
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <TextInputGroup
              label="username"
              name="username"
              placeholder="Enter username"
              value={username}
              onChange={this.onChange}
              error={errors.username}
            />
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div></div>
            </div>
        )
    }
}

export default  connect(null, { addContact })(AddCustomer)
