<template>
    <!-- Button -->
    <div class="row mb-3">
      <div class="col text-end">
        <button type="button" class="btn btn-primary" @click="modal.show()">
          Add Book
        </button>
      </div>
    </div>
  
    <!-- Table -->
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Page</th>
              <th class="text-center">Edit</th>
              <th class="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gülün Adı</td>
              <td>Umberto Eco</td>
              <td style="max-width: 250px">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </td>
              <td>217</td>
              <td class="text-center">
                <a href="#" >
                  <i class="fa fa-edit" style="font-size:24px"></i>

                </a>
              </td>
              <td class="text-center">
                <a href="#" @click="deleteBook(book._id)">
                  <i class="fa fa-trash-o" style="font-size:24px" ></i>

                </a>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  
    <!-- Modal -->
    <div class="modal fade" ref="addEditModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addModalLabel">Add Book</h5>
            <button
              type="button"
              @click="modal.hide()"
              class="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body mx-5">
            <div class="col mb-3">
              <label for="title" class="form-label"
                >Title
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="title"
                name="title"
                required
                  v-model="newBook.title"
              />
            </div>
            <div class="col mb-3">
              <label for="author" class="form-label"
                >Author
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="author"
                name="author"
                required
                  v-model="newBook.author"
              />
            </div>
            <div class="col mb-3">
              <label for="description" class="form-label"
                >Description
                <span class="text-danger">*</span>
              </label>
              <textarea
                name="description"
                id="description"
                class="form-control"
                cols="30"
                rows="10"
                      v-model="newBook.description"
              ></textarea>
            </div>
            <div class="col mb-3">
              <label for="author" class="form-label"
                >Number of Pages
                <span class="text-danger">*</span>
              </label>
              <input
                type="number"
                class="form-control"
                id="numOfPages"
                name="numOfPages"
                required
                   v-model="newBook.pageNumber"
              />
            </div>
            <div class="text-end mb-4">
              <button
                @click="modal.hide()"
                type="button"
                class="btn btn-outline-secondary"
              >
                Close
              </button>
              <button @click="addBook" type="button" class="btn btn-primary">
              Save
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useBookStore } from '@/stores/bookStore.js';
  import { mapActions } from 'pinia';

  import { Modal } from 'bootstrap';
  export default {
    name: 'DashboardBooks',
    data() {
      return {
        modal: null,
        newBook: {
        title: '',
        author: '',
        description: '',
        pageNumber: null,
      },
      };
    },
    methods: {
    ...mapActions(useBookStore, ['addNewBook']),
    async addBook() {
      try {
        await this.addNewBook(this.newBook);
      } catch (error) {}
    },
  },
    mounted() {
      this.modal = new Modal(this.$refs.addEditModal);
    },
  };
  </script>
  
  <style scoped>
  .btn-outline-secondary {
    border-radius: 25px;
    height: 48px;
    margin-right: 20px;
    min-width: 120px;
  }
  </style>