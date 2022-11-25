import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/search/repositories",
  timeout: 10000,
});

export const useRepoStore = defineStore("repoStore", {
  state: () => ({
    list: [
      {
        id: 1,
        name: "Task 1",
      },
      {
        id: 2,
        name: "Task 2",
      },
    ],
    pagination: {
      page: 1,
      per_page: 10,
      sort: "",
    },
    searchWord: "",
    single: {},
    history: [],
  }),
});

// id: "repo",

// // State

// actions: {
//   getRepoList() {
//     return new Promise((resolve, reject) => {
//       api
//         .get("", {
//           params: {
//             sort: pagination.value.sort,
//             per_page: pagination.value.per_page,
//             page: pagination.value.page,
//             q: searchWord.value,
//           },
//         })
//         .then((res) => {
//           list.value.push(res.data);
//           resolve("list retrieved");
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   },
// },
// getters: {},
