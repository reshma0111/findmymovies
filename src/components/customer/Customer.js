import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/CustomerAction';

 class Customer extends Component {
    state = {
        showCustomerInfo: false
      };
      onDeleteClick = id => {
        //// DELETE CONTACT ////
        this.props.deleteContact(id);
      };
    
    render() {
        const {id,name,username,email,phone} = this.props.customer;
        const {showCustomerInfo} =this.state;
        return (
            <div className = "container">
            <div className ="card card-body w-50 py-3 mx-auto y-3 my-4 ">
           <h4> {name}{''}<i 
           onClick={() => this.setState({
            showCustomerInfo: !this.state.showCustomerInfo
           })}
           className="fas fa-sort-down"
           style = {{cursor : 'pointer'}}/>
           < i className ="fas fa-times"
            style = {{cursor : 'pointer' ,
            float:'right',
            color:'red'
          }}
          onClick={this.onDeleteClick.bind(this, id)}
          
            />
          <Link to = {`/customer/edit/${id}`}>
            <i 
            className ="fas fa-pencil-alt"
            style={{cursor:'pointer',
            float:'right',
            color:'black',
            marginRight:'1rem'
          }}
            >
            </i>
          </Link>


           </h4>
           {showCustomerInfo?  ( <ul className ="list-group ">
           <li className="list-group-item">username:{username}</li>
           <li className="list-group-item  ">Email:  {email}</li>
             <li className="list-group-item">phone:{phone}</li>
               </ul>):null}
          </div></div>
      )
    }
  }
     

export default connect(null, { deleteContact })(Customer);
