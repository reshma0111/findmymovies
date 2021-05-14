import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT,GET_CONTACT,UPDATE_CONTACT } from './types';
import axios from 'axios'

export const getContacts = () =>async dispatch => {
    const res = await axios.get('http://jsonplaceholder.typicode.com/users')
    dispatch ({
        type: GET_CONTACTS,
        payload:res.data
    });
};


export const getContact = id =>async dispatch => {
  const res = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
  dispatch ({
      type: GET_CONTACT,
      payload:res.data
  });
};

export const deleteContact = id =>async  dispatch => {
  try{
    await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    });
  }  catch(e){
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    });
  }
     
};

export const addContact = customer=>async dispatch => {
    const res = await axios.post('http://jsonplaceholder.typicode.com/users',customer);
    dispatch({
        type: ADD_CONTACT,
        payload: res.data
    });
};

export const updateContact = customer =>async dispatch => {
  const res = await axios.put(`http://jsonplaceholder.typicode.com/users/${customer.id}`,customer);
  dispatch({
      type: UPDATE_CONTACT,
      payload: res.data
  });
};
