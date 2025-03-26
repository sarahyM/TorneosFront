import Button from "../Button";
import { useState } from "react";
import { FormattedMessage  } from 'react-intl';


function EditTournament({tournament, onSubmit}){

    const [name,setName] = useState(tournament.name);
    const [address,setAddress] = useState(tournament.address);
    const [description,setDescription] = useState(tournament.description);

    const handleSubmit = async (event) => {
        event.preventDefault();
        onSubmit(tournament.id,name,address,description);

    }
    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="name"><FormattedMessage id="NombreTorneo"/></label>
            <input 
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            type="text" 
            id="name" 
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="address"><FormattedMessage id="DireccionTorneo"/></label>
            <input 
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            type="text" 
            id="address" 
            name="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            />
            <label htmlFor='description'><FormattedMessage id="Descripcion"/></label>
            <textarea 
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' 
            htmlFor='description' 
            type='text' 
            id='description' 
            name='description'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            />
            <div className="mt-4">
                <Button primary rounded type="submit"><FormattedMessage id="Update"/></Button>
            </div>
        </form>
    )
}

export default EditTournament;