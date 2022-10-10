import { createStore } from "vuex";
import { todoData } from "../shared/data";
import { parseData } from "../shared/data-service";

const state = {
  todoDataStore: [],
  error: false,
};
const mutations = {
  populateStoreData(state, data) {
    state.todoDataStore = data;
  },
};
const actions = {
  letStoreGetData({ commit }) {
    const data = parseData(todoData);
    commit("populateStoreData", data);
  },
  updateData(context, data) {
    const index = todoData.findIndex((h) => h.id == data.id);
    todoData.splice(index, 1, data);
    context.dispatch("getData");
  },
  addData(context, data) {
    if (todoData.findIndex((h) => h.id == data.id) === -1) {
      todoData.push(data);
      context.dispatch("getData");
      context.state.error = false;
    } else {
      context.state.error = true;
    }
  },
};
const getters = {
  getEntryById: (state) => (id) => {
    console.log("Getting unique data");
    return state.todoDataStore.find((h) => h.id == id);
  },
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
