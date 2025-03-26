import { useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function PersistLogin() {

    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth, persist } = useAuth();

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoading(false);
        }, 6000); // Adjust the duration as needed (3000 milliseconds = 3 seconds)

        return () => clearTimeout(delay); // Cleanup on unmount
    }, []);

    useEffect(() => {
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try{
                await refresh();
            } catch (error) {
                console.error(error);
            } finally {                
                isMounted && setIsLoading(false);
            }
        }

        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

        return () => isMounted = false;
    },[isLoading])
    return(
        <>
        {!persist 
            ? <Outlet/>
            : isLoading
                ? <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                <FontAwesomeIcon icon={faSpinner} spin size="5x" />
                </div>
            </div>
                :<Outlet/>
        }
        
        </>
    )
}

export default PersistLogin;