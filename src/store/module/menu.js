const state = {
  //设置属性
  menuItems: {}

}

const getters = {
  getMenuItems: state => state.menuItems
}

const mutations = {
//改变属性状态
  srtMenuItems(state, data) {
    // console.error(data);
    state.menuItems = data
  },
  //将匹配到对象，在MenuItem数组中删除
  removeMenuItem(state, data) {
    state.menuItems.forEach((item, index) => {
      // console.log(item);
      if (item == data) {
        state.menuItems.splice(index, 1)
      }
    })
  },
//将新添加的Pizza Push到MenuItem属性中
  pushToMenuItem(state, data) {
    state.menuItems.push(data)
  }
}

const actions = {

}
export default {
  state,
  getters,
  mutations,
  actions
}
