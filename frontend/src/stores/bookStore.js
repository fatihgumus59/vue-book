import axios from "axios";
import { defineStore } from "pinia";

export const useBookStore = defineStore('bookStore',{
    state : ()=> ({
        books : [],
        isLoading : false,
    }),

    getters:{
        selectedBooks : (state) => {
            return (id) => state.books.find((book) => book._id === id) 
        }
    },

    actions:{
        async fetchBooks() {
            this.isLoading = true

            try{
                const response = await axios.get('http://localhost:3000/api/v1/books')
    
                this.books = response ? response?.data?.data : [];

            }catch(error){
                console.log('not fetching data',error);
            }finally{
                this.isLoading = false;
            }

        },
        async addNewBook(newBook) {
            console.log('store new book', newBook);
            try {
              const response = await axios.post(
                'http://localhost:3000/api/v1/books',
                newBook
              );
              this.books.push(response.data.data);
            } catch (error) {
              console.error('Error at add new  books', error);
            }
          },
    }
})