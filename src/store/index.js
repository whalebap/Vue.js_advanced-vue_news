import Vuex from "vuex";
import Vue from "vue";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {},
    list : []
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedJobs(state) {
      return state.jobs;
    },
    fetchedNews(state) {
      return state.news;
    },
  },
  mutations,
  actions,
});
