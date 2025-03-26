import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { axiosPriv } from "../api/axios";
import useAuth from "./useAuth";

function useAxiosPrivate () {

    const refresh = useRefreshToken();
    const {auth} = useAuth();

    useEffect(() => {

        const requestIntercept = axiosPriv.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        )

        const responseIntercept = axiosPriv.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;

                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPriv(prevRequest);
                }

                return Promise.reject(error);
            }
        );

        return () => {
            axiosPriv.interceptors.request.eject(requestIntercept);
            axiosPriv.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh]);

    return axiosPriv;
        
}



export default useAxiosPrivate;