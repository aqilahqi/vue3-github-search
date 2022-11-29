import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/search/repositories",
  timeout: 10000,
});

export const useRepoStore = defineStore("repoStore", {
  state: () => ({
    list: [],
    pagination: {
      page: 1,
      per_page: 10,
      sort: "",
    },
    searchWord: "",
    single: {},
    history: [],
  }),
  actions: {
    getRepoList() {
      return new Promise((resolve, reject) => {
        api
          .get("", {
            params: {
              sort: this.pagination.sort,
              per_page: this.pagination.per_page,
              page: this.pagination.page,
              q: this.searchWord,
            },
          })
          .then((response) => {
            this.list = [];
            response.data.items.map((item) => {
              this.list.push(item);
            });
            resolve("list retrieved");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});

// id: "repo",

// // State

// getters: {},
