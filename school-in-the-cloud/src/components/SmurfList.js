import React, { useState } from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';
import { updateSmurf, deleteSmurf } from '../actions/actions';

const initialState = {
    name: '',
    age: '',
    height: ''
}

const SmurfList = (props) => {
    console.log(props)

    const [editing, setEditing] = useState(false)
    const [smurfToEdit, setSmurfToEdit] = useState(initialState)


    const editSmurf = smurf => {
        setEditing(true);
        setSmurfToEdit(smurf)
    };

    const saveSmurfEdit = e => {
        e.preventDefault();
        updateSmurf()
        // setSmurfs([
        //     ...smurfs.filter(smurf => smurf.id !== smurfToEdit.id), res.data
        // ])
    }

    return (
        <div className='smurfs-list'>
            <h3>Smurfs</h3>
            <ul>
                {props.smurfs.map(smurf => (
                    <li key={smurf.id} onClick={() => editSmurf(smurf)}>
                        <span>
                            <span className='delete-smurf' onClick={e => {
                                e.stopPropagation();
                                deleteSmurf()
                            }}>
                                X
                            </span>{' '}
                            <Smurf smurf={smurf} key={smurf.id} />
                        </span>
                    </li>
                ))}
            </ul>
            <p>click Smurf to edit</p>
            {editing && (
                <form onSubmit={saveSmurfEdit}>
                    <legend>edit Smurf</legend>
                    <label>
                        name:
                        <input onChange={e =>
                            setSmurfToEdit({
                                ...smurfToEdit,
                                name: e.target.value
                            })
                        }
                            value={smurfToEdit.name}
                        />
                    </label>
                    <label>
                        age:
                    <input onChange={e =>
                            setSmurfToEdit({
                                ...smurfToEdit,
                                age: e.target.value
                            })
                        }
                            value={smurfToEdit.age}
                        />
                    </label>
                    <label>
                        height:
                    <input onChange={e =>
                            setSmurfToEdit({
                                ...smurfToEdit,
                                height: e.target.value
                            })
                        }
                            value={smurfToEdit.height}
                        />
                    </label>
                    <div className='buttons'>
                        <button type='submit'>save</button>
                        <button onClick={() => setEditing(false)}>cancel</button>
                    </div>
                </form>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfReducer.smurfs,
    }
}

export default connect(mapStateToProps, { updateSmurf, deleteSmurf })(SmurfList);
