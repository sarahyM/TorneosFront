import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../Button";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

function TournamentDetail() {

    const {tournamentId} = useParams();

    const [tournament, setTournament] = useState({});

    const fetchTournamentsDetail = async () => {
        try {
            const response = await axios.get("http://localhost:3001/tournaments/" + tournamentId)
            setTournament(response.data);
        } catch (err) {
            console.error("Error: " + err)
        }
        
    }

    useEffect( () => {
        fetchTournamentsDetail();
    }, [] )

    return (
        <div className="w-full m-auto py-2 px-4 relative group m-w-[1000px] h-[200px] font-squada-one">
            <div style={{backgroundImage: `url(${tournament.image})`}} className='w-full h-full rounded-2xl bg-center bg-cover'/>
                <div className="flex">

                    <div className="w-3/4 overflow-y-auto justify-between text-4xl mt-5 bg-green-100 rounded-lg p-3 mb-5 ">
                        <div className="flex">
                            <div className="text-3xl text-gray-700 mr-3 mt-1">
                                <FormattedMessage id="NombreTorneo"/> 
                            </div>
                            {tournament.name}
                        </div>

                        <div className="flex">
                            <div className="text-3xl text-gray-700 mr-3 mt-1">
                                <FormattedMessage id="FechaInicio"/> 
                            </div>
                            {tournament.date}
                        </div>

                            
                        <div className="flex">
                            <div className="text-3xl text-gray-700 mr-3 mt-1">
                                <FormattedMessage id="FechaFin"/> 
                            </div>
                            {tournament.dateEnd}
                        </div>

                        <div className="flex">
                            <div className="text-3xl text-gray-700 mr-3 mt-1">
                                <FormattedMessage id="DireccionTorneo"/>                             
                            </div>
                            {tournament.address}
                        </div>

                        <div className="flex text-2xl rounded-lg">
                            <div className="text-3xl text-gray-700 mr-3">
                                <FormattedMessage id="Descripcion"/>                             
                            </div>
                            {tournament.description}
                        </div>
            
                    </div>
                    <div className="flex flex-col items-center justify-center ml-20">
                        <div className="w-1/4 text-3xl mt-2">
                            <div className="flex justify-center animate-bounce"> 
                                <Link to={`/tournaments/subscribe/${tournament.id}`}>
                                    <Button success outline rounded><FormattedMessage id="InscripcionTorneo"/></Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default TournamentDetail;