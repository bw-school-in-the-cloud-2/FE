import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/actions';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    };

    handleSubmit = e => {
        e.preventDefault();
        addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    render() {
        return (
            <div className='smurf-form'>
                <h4>Add Smurf</h4>
                <form onSubmit={this.handleSubmit} >
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        value={this.state.name}
                        onChange={this.handleChanges}
                    />
                    <input
                        type='text'
                        name='age'
                        placeholder='age'
                        value={this.state.age}
                        onChange={this.handleChanges}
                    />
                    <input
                        type='text'
                        name='height'
                        placeholder='height'
                        value={this.state.height}
                        onChange={this.handleChanges}
                    />
                    <button type='submit'>Add</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.smurfReducer
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm);