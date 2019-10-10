import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid'

class Addcontact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();

       const { name, email, phone } = this.state;

       const newContact = {
           id: uuid(),
           name,
           email,
           phone
        }

       dispatch({type: 'ADD_CONTACT', payload: newContact});
        //clean state
       this.setState({
        name: '',
        email: '',
        phone: ''
       });
       this.props.history.push('/');
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});
   
    render() {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
             {value => {
                 const { dispatch } = value;
                 return (
                    <div className="card mb-3">
                    <div className="card-header">Add Contact</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                           <TextInputGroup 
                           label="Name"
                           name="name"
                           placeholder="Enter name"
                           value={name}
                           onChange={this.onChange}
                           />
                         <TextInputGroup 
                           label="Email"
                           name="email"
                           placeholder="Enter email"
                           value={email}
                           onChange={this.onChange}
                           />
                         <TextInputGroup 
                           label="Phone"
                           name="phone"
                           placeholder="Enter phone"
                           value={phone}
                           onChange={this.onChange}
                           />
                            <input type="submit" value="Add Contact" className="btn btn-block">
    
                            </input>
                        </form>
                    </div>
                </div>
                 )
             }}   
            </Consumer>
        )
    }
}
export default Addcontact;