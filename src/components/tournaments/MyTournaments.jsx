import ShowSubscribedTournaments from "./ShowSubscribedTournaments";


function MyTournaments({tournamentsList}){

    const renderedTournaments = tournamentsList.map((tournament) => {
       return <ShowSubscribedTournaments key={tournament.id} tournament={tournament}/>
    })

    return (
        <div className="fixed top-[72px] left-0 w-full overflow-y-auto h-full pb-14">
            <div className="flex flex-wrap justify-center bg-gray-100 p-4">{renderedTournaments}</div>
        </div>
    )

}

export default MyTournaments;
