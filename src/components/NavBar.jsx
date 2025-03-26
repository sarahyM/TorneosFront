import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { FormattedMessage, useIntl  } from 'react-intl';
import  LogoImage  from "./LogoImage";
import useAuth from "../hooks/useAuth";
import { CgProfile } from "react-icons/cg";
import { useEffect } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useSignout from "../hooks/useSignout";

function NavBar({component}) {

    const intl = useIntl();
    const {auth} = useAuth();
    const navigate = useNavigate();


    let LinksUser = [
        {name: intl.formatMessage({ id: 'Nav1' }), link:"/tournaments"},
        {name:intl.formatMessage({ id: 'Nav2' }), link:"/myTournaments"},
    ]

    
    let LinksAdmin = [
        {name: intl.formatMessage({ id: 'Nav1' }), link:"/tournaments"},
        {name: intl.formatMessage({ id: 'Nav3' }), link:"/admin"},
    ]

    let LinkUndefined = [
        {name: intl.formatMessage({ id: 'Nav4' }), link:"/tournaments"},
    ]

    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open)    
    }

    useEffect(() => {
        const handleResize = () => {
          // Check if the screen size meets  condition
          if (window.innerWidth < 500) {
            setOpen(true);
          } else {
            setOpen(false);
          }
        };
    
        // Call handleResize initially and add event listener
        handleResize();
        window.addEventListener('resize', handleResize);
    
        // Clean up by removing event listener
        return () => window.removeEventListener('resize', handleResize);
      }, []);


      const signout = useSignout();

      const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint
        await signout();
        navigate('/');        
    }

    
    return (
        <div className="shadow-md w-full fixed top-0 left-0 font-squada-one">
            <div className="md:flex flex items-center justify-between bg-white py-4 md:px-10 px-7">

                <div className="font-bold text-2x1 cursor-pointer flex items-center font-Poppins text-gray-800">
                    <span className="text-3x1 text-indigo-600 mr-1 pt-2">
                        <LogoImage small/>
                    </span>
                </div>

                <div onClick={() => handleToggle()}  className="text-3x1 absolute right-8 top-5 cursor-pointer md:hidden">
                    <ion-icon style={{ fontSize: '1.9rem' }} name={ open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 
                absolute md:static bg-white md:z-auto z-[-1] left-0 
                w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 
                ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
                    { auth?.role === "admin" ? 
                        (
                            LinksAdmin.map((link) => {
                                return (
                                    <li key={link.name} className="md:ml-8 text-xl md:my-0 my-5">
                                        <Link to={link.link} href={link.link} className="text-gray-800 hover:text-gray-300 duration-500">{link.name}</Link>
                                    </li>
                                ) 
                            })
                        ) : 
                    auth?.role === "user" ? 
                    (
                        LinksUser.map((link) => {
                            return (
                                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-5">
                                    <Link to={link.link} href={link.link} className="text-gray-800 hover:text-gray-300 duration-500">{link.name}</Link>
                                </li>
                            ) }
                        )
                    )  : auth?.role === "superadmin" ?
                    (
                        LinkUndefined.map((link) => {
                            return (
                                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-5">
                                    <Link to={link.link} href={link.link} className="text-gray-800 hover:text-gray-300 duration-500">{link.name}</Link>
                                </li>
                        )})
                    ) : (
                        <div></div>
                    )
                    
                    }
                    

                    <div>
                        {auth?.username ? (

                            <div className="flex md:ml-5">
                                <div className="mr-5 flex items-center text-lg"> <CgProfile className="mr-1" /> {auth.username}</div>
                                <Link to="/">
                                    <Button onClick={logout} nocustom><IoLogOutOutline className="text-3xl"/></Button>
                                </Link>
                            </div>
                        ) : (
                        <div className="flex flex-col md:flex-row">
                            <Link to="/login">
                                <Button nvgtbutton rounded><FormattedMessage id="TituloIS"/></Button>
                            </Link>
                            <Link to="/register">
                                <Button nvgtbutton rounded><FormattedMessage id="TituloReg"/></Button>
                            </Link>
                        
                        </div>

                        )}
                    </div>


                </ul>

            </div>

    
        <div>
            {!open && (
                <div>
                    {component}
                </div>
            )}
        </div>


        </div>

    )
}

export default NavBar;