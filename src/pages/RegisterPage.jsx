import Register from '../components/auth/Register';
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa";
import LogoImage from '../components/LogoImage';


function RegisterPage() {

    return (
        <div className="flex w-full h-screen">

            <div className="w-full flex items-center justify-center lg:w-1/2 bg-custom-green">
                <Register/>
            </div>


            <div className="hidden lg:flex flex-col w-1/2 items-center justify-center h-full">
                
                <div>
                    <LogoImage big/>
                </div>

                <div className='flex mt-50 space-x-20 animate-bounce'>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-5xl hover:scale-110 transition duration-300" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <TiSocialFacebookCircular className="text-5xl hover:scale-110  transition duration-300" />
                    </a>

                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="text-5xl hover:scale-110  transition duration-300" />
                    </a>
                </div>
            
            </div>


        </div>
    )
}

export default RegisterPage;