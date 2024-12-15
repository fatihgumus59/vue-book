import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore',{
    state : ()=> ({
        user: null
    }),

    getters:{
        isLoggedIn : (state)=>{
            return !!state.user
        }
    },

    actions:{
        async register(data) {

            try{
                const response = await axios.post('http://localhost:3000/api/v1/auth/register',data)
            
                //this.user = response ? response?.data?.data : [];

            }catch(error){
                throw error.response.data
            }

        },
        async login(data) {

            try{
                const response = await axios.post('http://localhost:3000/api/v1/auth/login',data)
                const token = response.data.acces_token;
                this.user = response.data.user;
                localStorage.setItem('user', JSON.stringify(response.data));
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                
            }catch(error){
                throw error.response.data
            }

        },
        async logout(){
            this.user = null
            localStorage.removeItem('user')
            location.reload()
        }
    }
})