import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore',{
    state : ()=> ({
        user: null
    }),

    getters:{

    },

    actions:{
        async register(data) {

            try{
                const response = await axios.post('http://localhost:3000/api/v1/auth/register',data)
                
                console.log('ress',response);
                //this.user = response ? response?.data?.data : [];

            }catch(error){
                console.log('not register user',error);
            }

        },
        async login(data) {

            try{
                const response = await axios.post('http://localhost:3000/api/v1/auth/login',data)
                
                console.log('ress',response);
                //this.user = response ? response?.data?.data : [];

            }catch(error){
                console.log('not register user',error);
            }

        }
    }
})