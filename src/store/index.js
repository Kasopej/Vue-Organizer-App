import Vue from 'vue'
import Vuex from 'vuex'
import { todoData } from "../shared/data";
import { parseData } from "../shared/data-service";

Vue.use(Vuex)

const state = {
  todoDataStore: [],
};
const mutations = {
  populateStoreData(state, data) {
    state.todoDataStore = data;
  }
};
const actions = {
  getData({ commit }) {
    const data = parseData(todoData);
    commit('populateStoreData', data);
  },
  updateData(context, data) {
    const index = todoData.findIndex(h => h.id === data.id);
    todoData.splice(index, 1, data);
    context.dispatch('getData');
  },
  addData(context, data) {
    todoData.push(data);
    context.dispatch('getData');
  }
};
const getters = {
  getEntryById: state => id => state.todoDataStore.find(h => h.id === id),
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
