import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  data: []
}

const mutations = {
  RECEIVE_CHARACTERS (state, {characters}) {
      state.data = characters
  }
}

const actions = {
    async FETCH_CHARACTERS ({ commit }, name) {
        const apikey = '5f568e39827a4dfa4c9bd0e754855e5f'
        const url = 'http://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=' + name + '&apikey=' + apikey
        const { data } = await axios.get(url)
        commit('RECEIVE_CHARACTERS', { characters: data.data.results })
    }
}

const getters = {
    characters: state => {
        if (!state.data) {
            return [];
        }
        return state.data.map(data => {
            return {
                name: data.name,
                url: data.urls[1] ? data.urls[1].url : data.urls[0].url,
                image: data.thumbnail.path + '.' + data.thumbnail.extension,
                description: data.description === '' ? 'No description listed for this character' : data.description
            }
        })
    }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
