import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore',{
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
                throw error
            }

        },
        async login(data) {

            try{
                const response = await axios.post('http://localhost:3000/api/v1/auth/login',data)
                this.user = response.data.user;
                localStorage.setItem('user',JSON.stringify(this.user))
                
                console.log('ress',response);
                //this.user = response ? response?.data?.data : [];

            }catch(error){
               throw error
            }

        },
        async logout(){
            this.user = null
            localStorage.removeItem('user')
            location.reload()
        }
    }
})