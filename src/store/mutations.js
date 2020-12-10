export default {
  

  SET_LIST(state, list) {
    state.list = list;
  },  //파라미터 news는 context.commit('SET_NEWS', res.data)의 두번째 인자다.
 
  SET_ITEM(state, item) { 
    state.item = item
  },
  SET_USER(state, user) { 
    state.user = user
  }
};
