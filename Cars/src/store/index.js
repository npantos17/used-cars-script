import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    sellers: [],
    orders: [],
    token: '',
    // user: {}
  },
  mutations: {
    setCars(state, cars){
      this.cars = cars
    },
    clearCars(state){
      this.cars = []
    },
    setSellers(state, sellers){
      this.sellers = sellers
    },
    addSeller(state, seller){
      state.sellers.push(seller)
    },
    addCar(state, car){
      state.cars.push(car)
    },
    addOrder(state, order){
      state.orders.push(order)
    },
    setToken (state, token){
      state.token = token;
      localStorage.token = token;
    },
    // set_user: (state, user) => {
    //   state.user = user;
    //   console.log(state.user);
    // },
    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    }
  },

  actions: {
    fetchCars({commit, state}){
      fetch('http://127.0.0.1:8000/admin/cars/', { method: 'get', headers: { 'Authorization': `Bearer ${state.token}` } })
        .then( res => res.json() )
        .then( data => 
          {
            commit('clearCars')
            data.forEach(el => {
              
              commit('addCar', el)
             });
            //  //commit('setCars', cars1)
            //commit('setCars', data.array)
          })
          
    },
    fetchSellers({commit, state}){
      fetch('http://127.0.0.1:8000/admin/sellers/', { method: 'get', headers: { 'Authorization': `Bearer ${state.token}` } })
        .then( res => res.json() )
        .then( data => 
          {
            data.forEach(el => {
              commit('addSeller', el)
            });
          })
          //commit('setCars', obj))
    },
    fetchOrders({commit, state}){
      fetch('http://127.0.0.1:8000/admin/orders/', { method: 'get', headers: { 'Authorization': `Bearer ${state.token}` } })
        .then( res => res.json() )
        .then( data => 
          {
            data.forEach(el => {
              commit('addOrder', el)
            });
          })
          //commit('setCars', obj))
    },
    register({ commit }, obj) {
      fetch('http://127.0.0.1:9000/api_register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tkn => commit('setToken', tkn.token) );
    },

    login({ commit }, obj) {
      fetch('http://127.0.0.1:9000/api_login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( tkn => {
        if (tkn.msg) {
          alert(tkn.msg);
        } else {
          //console.log(tkn.token)
          commit('setToken', tkn.token)
          document.cookie = `token=${tkn.token};SameSite=Lax`;
        }
      });
    },

    socket_comment({ commit }, car) {
      //const comment = JSON.parse(msg);
      commit('addCar', car);
    }
  },
  modules: {
  }
})
