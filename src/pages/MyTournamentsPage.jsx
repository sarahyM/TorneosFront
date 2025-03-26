import { useEffect, useState } from "react";
import axios from 'axios';
import useAuth from "../hooks/useAuth";
import MyTournaments from "../components/tournaments/MyTournaments";

function MyTournamentsPage() {

    const [myTournamentList,setMyTournamentList] = useState([]);

    const {auth} = useAuth()

    const fetchTournaments = async () => {
        const response = await axios.get("http://localhost:3001/users/"+auth?.id+"/tournaments")

        setMyTournamentList(response.data);        
    }
    useEffect(() => {
        fetchTournaments();
    },[])

    

    return (
        <div>
            <MyTournaments tournamentsList={myTournamentList}/>
        </div>
    )
}

export default MyTournamentsPage;