import { useEffect, useState } from "react";
import Button from "../Button";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

function CreateTournament({onCreate}){

    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [selectedDate,setselectedDate] = useState("")
    const [selectedDateEnd,setselectedDateEnd] = useState("")
    const [description,setDescription] = useState("")
    const [imageUrl,setImageUrl] = useState("")

    const [success, setSuccess] = useState("");

    //Date Picker validations

    const [validationDate, setValidationDate] = useState(false);

    useEffect(() => {
        setValidationDate(selectedDate < selectedDateEnd);
    }, [selectedDate,selectedDateEnd])

    const handleSubmit = (event) => {

        event.preventDefault();

        onCreate(name,address,selectedDate,selectedDateEnd,imageUrl,description);

        setName("");

        setAddress("");

        setselectedDate("");

        setImageUrl("");

        setDescription("");

        setselectedDateEnd("");

        setSuccess(true);

    }

    return (
       <>
        {success ? (
                <section>
                    <h1 className='sucmessage'><FormattedMessage id="InscripcionTorneo"/></h1>
                    <p className='flex justify-center items-center mt-2'>
                        <Link to={"/tournaments"}>
                                <Button primary rounded><FormattedMessage id="IrTorneosCreados"/></Button>
                        </Link>  
                    </p>
                </section>
            ) : (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 font-squada-one">
                    <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                        <form onSubmit={handleSubmit}>

                            <div className="flex flex-col">

                                <label className='text-lg font-medium'><FormattedMessage id="NombreTorneo"/></label> 
                                <input 
                                value={name} 
                                onChange={(event) => setName(event.target.value)}
                                className='border-2 border-gray-200 rounded-xl p-4 bg-transparent'
                                minLength="12"
                                />

                                <label className='text-lg font-medium'><FormattedMessage id="DireccionTorneo"/></label> 
                                <input 
                                value={address} 
                                onChange={(event) => setAddress(event.target.value)}
                                className='border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent'
                                />

                                <label className='text-lg font-medium'><FormattedMessage id="ImagenURL"/></label> 
                                <input 
                                value={imageUrl} 
                                onChange={(event) => setImageUrl(event.target.value)}
                                className='border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent'
                                />

                                <label className='text-lg font-medium'><FormattedMessage id="Descripcion"/></label> 
                                <textarea
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                    className='border-2 border-gray-200 rounded-xl p-4 resize-none bg-transparent'
                                    rows="3" // Adjust the number of rows to fit your design
                                />

                                <div className="flex mt-5">
                                    <label className='text-lg font-medium mr-5'><FormattedMessage id="FechaInicio"/></label> 
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => setselectedDate(date)}
                                        dateFormat="yyyy-MM-dd"
                                        placeholderText="Select an starting date"
                                        className="bg-green-100"
                                        aria-invalid={validationDate ? "false" : "true"}
                                        />
                                </div>

                                <div className="flex mt-5">
                                    <label className='text-lg font-medium mr-5'><FormattedMessage id="FechaFin"/></label> 
                                    <DatePicker
                                        selected={selectedDateEnd}
                                        onChange={(date) => setselectedDateEnd(date)}
                                        dateFormat="yyyy-MM-dd"
                                        placeholderText="Select an end date"
                                        className="bg-green-100"
                                        />
                                </div>

                                <label className='text-lg font-medium mt-5'>
                                    <div className={validationDate ? "valid" : "hide"}>
                                        <FormattedMessage id="ValidDates"/>
                                    </div>
                                    <div className={validationDate ? "hide" : "invalid"}>
                                        <FormattedMessage id="InvalidDates"/>
                                    </div>
                                </label>
                            </div>
                            <Button disabled={!name || !address || !imageUrl || !description || !selectedDate || !selectedDateEnd || !validationDate ? true : false}primary marginTop>Submit</Button>

                        </form> 
                    </div>
            </div>
        )}
       </>
    )

} 

export default CreateTournament;