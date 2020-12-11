import {
  
  fetchUserInfo,
  fetchItem, fetchList
} from "../api/index";

export default {
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then((response) => {
        commit("SET_LIST", response.data);
        return response;
      })
      .catch((error) => console.log(error));
  },
 
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
        return data;
      })
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchItem(itemId)
      .then(({ data }) => {
        commit("SET_ITEM", data);
        return data;
      })
      .catch((error) => console.log(error));
  },
};
