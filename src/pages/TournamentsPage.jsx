import { useEffect, useState } from "react";
import TournamentList from "../components/tournaments/TournamentList";
import axios from 'axios';
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function TournamentsPage() {

    const [tournamentList,setTournamentList] = useState([]);

    const {auth} = useAuth()

    const axiosPrivate = useAxiosPrivate();

    const fetchTournaments = async () => {

        if(navigator.onLine){
            const response = await axios.get('http://localhost:3001/tournaments')
            setTournamentList(response.data);
            localStorage.setItem("tournaments",JSON.stringify(response.data))
        } else {
            if(localStorage.getItem("tournaments")){
                setTournamentList(JSON.parse(localStorage.getItem("tournaments")));
            }
        }
     
    }
    useEffect(() => {
        fetchTournaments();
    },[])

    
    const deleteBookById = async (id) => {

        try{
            await axiosPrivate.delete(`/tournaments/${id}`);
            const updatedTournaments = tournamentList.filter((tournament) => tournament.id !== id);
    
            setTournamentList(updatedTournaments);
        } catch (error) {
            console.log(error);
        }
    }

    const editTournament = async (id,name,address,date, dateEnd, image, description) => {

        const tournamentsUpdate = await axiosPrivate.put(`/tournaments/${id}`,{
            name,
            address,
            date,
            dateEnd,
            image,
            description
        },
        {
            headers: { 'Authorization': `Bearer ${auth?.accessToken}`}
    })

        const updatedTournaments = tournamentList.map((tournament) => {
            if(tournament.id === id){
                return  {...tournament, ...tournamentsUpdate.data};
            }

            return tournament;
        })

        setTournamentList(updatedTournaments);
    }
    
    return (
        <div>
            <TournamentList tournamentsList={tournamentList} onDelete={deleteBookById} onEdit={editTournament}/>
        </div>
    )
}

export default TournamentsPage;