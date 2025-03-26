import React, { useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import { FormattedMessage  } from 'react-intl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";
import EditTournament from "./EditTournament";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarMinus } from "react-icons/fa6";



function ShowTournament({tournament, onDelete, onEdit}) {


  const [showEdit, setShowEdit] = useState(false);

  const {auth} = useAuth();

  const handleDelete = async () => {
    onDelete(tournament.id);
  }

  const handleEdit = () => {
    setShowEdit(!showEdit);
  }

  const handleSubmit = (id,name,address,description) => {
    setShowEdit(false);
    onEdit(id,name,address, tournament.date, tournament.dateEnd,tournament.image,description);
  }

  let content = <div>
    <div className="font-bold text-2xl mb-2 truncate text-center mt-5">{tournament.name}</div>
        <img className="w-full h-auto mb-2 rounded-lg" src={tournament.image} alt="" />
        <p className="font-bold text-2xl text-gray-700 text-center">{tournament.address}</p>
        <div className="flex flex-col items-center">
          <div className="flex">
            <FaRegCalendarCheck className="mr-2 mt-1"/>
            <p className="text-gray-700 text-base text-center"> <FormattedMessage id="FechaInicioCard"/> {tournament.date}</p>
          </div>
          <div className="flex">
          <FaRegCalendarMinus className="mr-2 mt-1"/>
            <p className="text-gray-700 text-base text-center"> <FormattedMessage id="FechaFinCard"/> {tournament.dateEnd}</p>
          </div>
        </div>
        <div className="text-center">
          <Link to={`${tournament.id}`}>
            <Button success marginTop outline rounded><FormattedMessage id="Detalles"/></Button>
          </Link>
        </div>
  </div>

  if (showEdit) {
    content = <EditTournament onSubmit={handleSubmit} tournament={tournament}/>
  }

    return (
      <div className="border border-gray-200 rounded-xl max-w-xs overflow-hidden shadow-lg bg-white m-5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition duration-500 hover:scale-105 hover:shadow-xl relative">
          <div className="flex flex-col justify-between h-full p-4 ">
            <div>{content}</div>
            { auth?.role === 'superadmin' ? (
                <div className="flex absolute top-1 right-1">
                    <Button edit rounded onClick={handleEdit}>
                      <FontAwesomeIcon icon={faEdit} className="text-sm"/>
                    </Button>
                    <Button del rounded onClick={handleDelete}>
                      <FontAwesomeIcon icon={faTimes} className="text-sm"/>
                    </Button>
                </div>
            ) : (
              <div></div>
            )}
          
          </div>

      </div>
    )
}

export default ShowTournament;