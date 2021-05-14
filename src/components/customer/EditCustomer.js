import React, { Component } from 'react'
import TextInputGroup from '../layouts/TextInputGroup';
import { connect } from 'react-redux';
import {getContact,updateContact} from '../../actions/CustomerAction'

class EditCustomer extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        username:'',
        errors: {}
      };
    
      
  componentWillReceiveProps(nextProps,nextState){
    const {name, email, phone,username}= nextProps.customer;
    this.setState({
      name,
      email,
      phone,
      username
    });
  }


componentDidMount(){
  const {id} = this.props.match.params;
  this.props.getContact(id);
} 

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
        
        const { id } = this.props.match.params;
        const updContact = {
          name,
          email,
          phone,
          username
        };
        this.props.updateContact(updContact);
    
        //// UPDATE CONTACT ////
    
        // Clear State
        this.setState({
          name: '',
          email: '',
          phone: '',
          username: '',
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
    <div className="card-header">Edit Contact</div>

    <img class="card-img" src="https://wallpaperaccess.com/full/2155719.jpg" 
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
          label="username"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={this.onChange}
          error={errors.username}
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


const mapStateToProps = state =>
({
  customer: state.customer.customer
})

export default connect(mapStateToProps,{getContact, updateContact})(EditCustomer);
