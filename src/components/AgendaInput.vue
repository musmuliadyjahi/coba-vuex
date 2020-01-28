<template>
  <div class="col-md-6">
    <div class="card-header">
      <h3 class="card-title">List Agenda</h3>
    </div>
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="">Hari</label>
          <input
            type="text"
            v-model="agenda.hari"
            class="form-control"
            required
            placeholder="ketik hari"
          />
        </div>
        <div class="form-group">
          <label for="">Kegiatan</label>
          <input
            type="text"
            v-model="agenda.kegiatan"
            class="form-control"
            required
            placeholder="ketik kegiatan"
          />
        </div>
        <button
          type="submit"
          class="btn"
          :disabled="isLoading"
          @click.prevent="simpan"
        >
          {{ isLoading ? 'Loading...' : 'Tambahkan' }}
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AgendaInput',
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  data() {
    return {
      agenda: {
        hari: '',
        kegiatan: ''
      }
    };
  },
  methods: {
    simpan() {
      this.$store.dispatch('simpanAgenda', this.agenda);
      this.agenda = {
        hari: '',
        kegiatan: ''
      };
    }
  }
};
</script>
<style scoped>
.btn {
  background-color: #01b08e;
}
.form-group {
  text-align: left;
}
</style>
