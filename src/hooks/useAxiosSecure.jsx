<<<<<<< HEAD
import axios from "axios";
=======
import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';
>>>>>>> other/main

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
<<<<<<< HEAD
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  return axiosSecure;
};
=======

    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        
        // INTERCEPT REQUEST -->    
        const reqInterceptor = axiosSecure.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${user?.accessToken}`
            return config
        })

        // INTERCEPTOR RESPONSE -->
        const resInterceptor = axiosSecure.interceptors.response.use( (response) => { 
            return response
        }, (error) => {
            console.log(error);

            const statusCode = error.status;
            if(statusCode === 401 || statusCode === 403) {
                logOut()
                    .then(() => {
                        navigate('/login');
                    })
            }

            return Promise.reject(error);
        })

        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        }


    }, [user, logOut, navigate])

    return axiosSecure;

};          
>>>>>>> other/main

export default useAxiosSecure;
