import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT,GET_CONTACT,UPDATE_CONTACT } from '../actions/types';

const initialState = {
    customers: [],
   customer:{}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                customers: action.payload
            };

            case GET_CONTACT:
             return {
                 ...state,
                customer: action.payload

             }

             case UPDATE_CONTACT:
                return {
                    ...state,
                    cutomers: state.customers.map(
                        customer => 
                        customer.id === action.payload.id 
                        ? (customer =action.payload)
                        : customer )
   
                } 

        case DELETE_CONTACT:
            return {
                ...state,
                customers: state.customers.filter(customer => customer.id !== action.payload)
            };
        case ADD_CONTACT:
            return{
            ...state,
            customers: [action.payload, ...state.customers]
            }
        default:
            return state;
    }
}