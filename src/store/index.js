import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    listAgenda: [
      { hari: 'senin', kegiatan: 'Belajar Vuejs' },
      { hari: 'selasa', kegiatan: 'Belajar Vuex' },
      { hari: 'rabu', kegiatan: 'Belajar Nuxt' }
    ]
  },
  mutations: {
    Konfirmasi_Agenda: (state, agenda) => {
      state.listAgenda.push(agenda);
    }
  },
  actions: {
    simpanAgenda({ commit, state }, agenda) {
      state.isLoading = true;
      setTimeout(() => {
        commit('Konfirmasi_Agenda', agenda);
        state.isLoading = false;
      }, 1500);
    }
  },
  modules: {}
});
