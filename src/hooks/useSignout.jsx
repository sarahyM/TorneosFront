import useAuth from "./useAuth";
import axiosPriv from '../api/axios';
function useSignout() {

    const {setAuth} = useAuth();

    const signout = async () => {
        setAuth({})

        try{
            const response = await axiosPriv.post('/auth/signout',{}, {
                withCredentials: 'true'
            })
        } catch (err) {            
            console.error(err);
        }
    }
    return signout;
}


export default useSignout;