import useAuth from './useAuth';
import axiosInstance from '../api/axios';

function useRefreshToken(){

    const { setAuth } = useAuth();

    const refresh = async () => {

        const response = await axiosInstance.get('/auth/refresh', 
            {
                withCredentials: true // Send cookies with the request.
            }
        );        
        setAuth(prev => {
            console.log(response?.data?.accessToken);
            console.log(response);
            
            return({
                ...prev,
                accessToken: response?.data?.accessToken,
                role: response?.data?.role,
                username: response?.data?.username,
                id: response?.data?.id
        })
        })

        return response?.data?.accessToken;
    }

    return refresh;
};

export default useRefreshToken; 