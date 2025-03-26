import ShowTournament from "./ShowTournament";


function TournamentList({tournamentsList, onDelete,onEdit}){

    const renderedTournaments = tournamentsList.map((tournament) => {
       return <ShowTournament key={tournament.id} tournament={tournament} onDelete={onDelete} onEdit={onEdit}/>
    })

    return (
        <div className="fixed top-[72px] left-0 w-full overflow-y-auto h-full pb-14">
            <div className="flex flex-wrap justify-center bg-gray-100 p-4">{renderedTournaments}</div>
        </div>
    )

}

export default TournamentList;