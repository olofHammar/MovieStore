import React, { useState }from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/profile';


const Profile = () => {

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(actions.changeName(name));
    }

    return (
        <div>
            Name:
             <input type="text" value={name}
            onChange={e => setName(e.target.value)} /> <br/>
            <button onClick={handleSave}>Save</button> 
        </div>
    )
}

export default Profile
