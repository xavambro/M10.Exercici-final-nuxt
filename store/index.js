



export const state = () => ({
    users:[],
    pictures:[],
    input:'',
    error:false,
    
})
export const getters = {
  users(state){
    return state.users;
  },
  pictures(state){
    return state.pictures;

  },
  getUser(state){
    return state.users.filter(user => user.name.toLowerCase().includes(state.input.toLowerCase()))
  },
  usersConsulted(state){
    return state.users.filter(user => user.counter > 0)
  },

  albumsConsulted(state){
    return state.pictures.filter(album => album.counter >0)
  },
  getInput(state){
    return state.input
  }

}
export const mutations = {
  addInput (state, inp){
    state.input = inp;
  },
  removeInput(state){
    state.input=''
  },
  INCREMENT(state,selection){
    selection.counter++;
  },
  SET_USERS(state, users){
    if(state.users.length === 0){
      state.users = users;
      state.users.counter = 0;
    } 
  },
  SET_PICTURES(state,pictures){
    if(state.pictures.length === 0){
      state.pictures = pictures;
      state.pictures.counter = 0;
    } 
  }

}
export const actions = { 
  async getUsers({ commit }) {
    const response = await this.$axios.$get('http://jsonplaceholder.typicode.com/users')
      //Añadimos la propiedad counter a cada uno de los usuarios
      response.forEach(item=>item.counter = 0);
      console.log(response)
    commit('SET_USERS', response);
    },
  
  async getPictures({ commit }) {
    const response = await this.$axios.$get('http://jsonplaceholder.typicode.com/photos')
    response.forEach(item=>item.counter = 0);
    commit('SET_PICTURES', response);
    }

}
  