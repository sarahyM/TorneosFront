import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Dropdown from '../Dropdown';
import Button from '../Button';
import {Link} from "react-router-dom";
import { FormattedMessage, useIntl} from 'react-intl';



function SubscribeTournament() {

    const {tournamentId} = useParams();
    const {auth} = useAuth();

    const [success, setSuccess] = useState(false);

    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');

    const intl = useIntl()


    // Options for the categories

    const options = [
        {
            label: "Begginers",
            value : "Begginers"
        },
        {
            label: "Intermediate",
            value : "Intermediate"
        },
        {
            label: "Expert",
            value : "Expert"
        },
        {
            label: "Professional",
            value : "Professional"
        }
    ]

    // Dropdown category selection

    const [selection, setSelection] = useState(null);

    const handleSelection = (option) => {
        setSelection(option);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{

            await axios.post("http://localhost:3001/users/"+auth?.id+"/tournaments/"+tournamentId,
            {
                category: selection.value
            }
            );
            setSuccess(true);

        } catch (error){
            if (error.response?.status === 412){
                setErrMsg(intl.formatMessage({ id: 'ErrorAlreadySubscribed' }));
            }
        }


    }

    return (
        <>
        {success ? (
                <section className='flex flex-col justify-center items-center min-h-screen bg-gray-200 font-squada-one'>
                    <h1 className='sucmessage'><FormattedMessage id="ExitosoReg"/></h1>
                    <p className='flex justify-center items-center mt-2'>
                        <Link to={"/myTournaments"}>
                                <Button primary rounded><FormattedMessage id="IraMisTorneos"/></Button>
                        </Link>  
                    </p>
                </section>
            ) : (

            <div className="flex justify-center items-center min-h-screen bg-gray-200">   
                <div className='text-center'>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form onSubmit={handleSubmit}>
                        <div className='text-9xl font-squada-one text'><FormattedMessage id="Saludo"/> {auth?.username} </div>
                        <div className='text-5xl font-squada-one'><FormattedMessage id="CategorySelection"/></div>
                        <div className="flex justify-center items-center space-x-4">
                            <div className="w-64"> 
                                <Dropdown  options={options} selection={selection} handleSelection={handleSelection}/>
                            </div>
                                <Button disabled={!selection ? true : false} primary rounded marginbtm marginTop><FormattedMessage id="InscripcionTorneo"/></Button>
                        </div>

                    </form>
                </div>
            </div>
            )}
        </>

    )
}


export default SubscribeTournament;