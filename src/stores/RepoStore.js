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
              const findSaved = this.history.find((repo) => repo.id == item.id);
              if (findSaved) {
                item = Object.assign(item, {
                  saved: true,
                });
              } else {
                item = Object.assign(item, {
                  saved: false,
                });
              }
              this.list.push(item);
            });
            resolve("list retrieved");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    saveRepo(repo) {
      const find = this.history.find((list) => list.id == repo.id);
      const toggleSave = this.list.findIndex((list) => list.id == repo.id);

      if (!find) {
        this.list[toggleSave].saved = !this.list[toggleSave].saved;
        this.history.push(repo);
      } else {
        this.history = this.history.filter((history) => history.id !== repo.id);
        this.list[toggleSave].saved = !this.list[toggleSave].saved;
      }
    },
  },
});

// id: "repo",

// // State

// getters: {},
