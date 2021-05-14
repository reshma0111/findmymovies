import React, { Component } from 'react'
import Customer from './Customer'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/CustomerAction';
import styles from './customer.module.css'

 class Customers extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
    render() {
        const {customers} = this.props;
        return (
            <React.Fragment>
  <p className ={styles.star}>
        <h1 className="display-4 mb-2" >
        
          <span className="text-warning">List Of Your Favourite Movie Stars  </span>
        </h1></p>
        {customers.map(customer => (
          <Customer key={customer.id} customer={customer} />
        ))}
      </React.Fragment>
        )
    }
}


  
  const mapStateToProps = (state) => ({
    customers: state.customer.customers
  });
  
  
  
  export default connect(mapStateToProps, {getContacts})(Customers);
  
  
