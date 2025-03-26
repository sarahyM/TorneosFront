
function ShowSubscribedTournaments({tournament}) {


    return (
      <div className="border border-gray-200 rounded-xl max-w-xs overflow-hidden shadow-lg bg-white m-5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition duration-500 hover:scale-105 hover:shadow-xl">
        <div className="flex flex-col justify-between h-full p-6">
          <div className="font-bold text-2xl mb-2 truncate text-center">{tournament.tournament.name}</div>
          <img className="w-full h-auto mb-2 rounded-lg" src={tournament.tournament.image} alt="" />
          <p className="text-gray-700 text-base text-center">{tournament.tournament.address}</p>
          <p className="text-gray-700 text-base text-center">{tournament.tournament.date}</p>
          <p className="text-gray-700 text-base text-center bg-green-200 rounded-xl">{tournament.category}</p>

        </div>
      </div>
    )
}

export default ShowSubscribedTournaments;