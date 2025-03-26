import React, { useRef, useState, useEffect } from 'react';
import Button from '../Button';
import axios from 'axios';
import { useNavigate, Link, useLocation } from "react-router-dom";
import Google from '../../img/google.jpg';
import { FormattedMessage, useIntl  } from 'react-intl';
import useAuth from '../../hooks/useAuth';

function Login() {

    const { setAuth, persist, setPersist } = useAuth();
    const userRef = useRef(null);
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        // Ensure userRef.current is not null before calling focus
        if (userRef.current !== null) {
            userRef.current.focus();
        }
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const navigate = useNavigate();

    // Get the currect location URL and some properties
    const location = useLocation();

    // Get where they came from or take them to the home
    const from = location?.state?.from.pathname ||  "/" ;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/auth/signin',
                {
                    username,
                    password
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            
            const accessToken = response?.data?.accessToken;
            const role = response?.data?.role;
            const id = response?.data?.id;

            console.log("at: " + accessToken, "roles: " + role, "Username: " + username, "id: " + id);
               
            setAuth({username,accessToken,role,id});
            setUsername('');
            setPassword('');
            navigate(from, { replace: true });

        } catch (error) {
            if (!error.response) {
                setErrMsg(intl.formatMessage({ id: 'ErrorIS1' }));
            } else if (error.response.status === 400) {
                setErrMsg(intl.formatMessage({ id: 'ErrorIS2' }));
            } else if (error.response.status === 401) {
                setErrMsg(intl.formatMessage({ id: 'ErrorIS3' }));
            } else {
                setErrMsg(intl.formatMessage({ id: 'ErrorIS4' }));
            }

            errRef.current.focus();
        }

    }

    const intl = useIntl()

    const handleChange = () => {
        setPersist(prev => !prev);
      };
    
      useEffect(() => {
        localStorage.setItem("persist", persist);
      },[persist])

    return (

        <div className='bg-white px-10 py-7 rounded-3xl border-2 font-squada-one'>

            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1 className='text-5xl font-semibold text-center'><FormattedMessage id="TituloIS"/></h1>
            <p className='font-medium text-lg text-gray-500 mt-4 text-center'><FormattedMessage id="BienvenidaIS"/></p>

            <form onSubmit={handleSubmit}>

                <div className='mt-8'>
                    <label className='text-lg font-medium'><FormattedMessage id="UsuarioIS"/></label>
                    <input
                        type='text'
                        id='username'
                        ref={userRef}
                        autoComplete='on'
                        placeholder={intl.formatMessage({ id: 'UsuarioIS' })}
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        required
                    />
                </div>

                <div>
                    <label className='text-lg font-medium'><FormattedMessage id="ContraseñaIS"/></label>
                    <input
                        id='password'
                        value={password}
                        placeholder={intl.formatMessage({ id: 'ContraseñaIS' })}
                        onChange={(event) => setPassword(event.target.value)}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        type='password'
                    />
                </div>

                <div className="flex items-center mt-5 ml-2">
                    <input
                        type="checkbox"
                        checked={persist}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <label className="ml-2 text-gray-700">Remember me</label>
                </div>

                <div className='mt-5 flex flex-col'>
                    <Button primary rounded marginbtm><FormattedMessage id="UnirmeIS"/></Button>
                </div>


            </form>

            <Button secondary rounded outline>
                <img src={Google} alt="Google Logo" className="w-4 h-4 rounded-full ml-5" />
                <span><FormattedMessage id="GoogleIS"/></span>
            </Button>
            <div className='flex justify-center  items-center mt-2'>
                <div className='font-italic'><FormattedMessage id="PreguntaRegistroIS"/></div>
                <span className="ml-2 line">
                    <Link to={"/register"}>
                        <Button nocustom><FormattedMessage id="RegistrarmeIS"/></Button>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Login;