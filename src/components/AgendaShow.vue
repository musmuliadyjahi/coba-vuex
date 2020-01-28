<template>
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Daftar Agenda</h3>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Hari</th>
                <th>Agenda</th>
              </tr>
            </thead>
            <tbody>
              <!-- looping dari computed agenda-->
              <tr v-for="(row, index) in agenda" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ row.hari }}</td>
                <td>{{ row.kegiatan }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AgendaShow',
  computed: {
    //buat computed
    agenda() {
      //data dari state listAgenda
      return this.$store.state.listAgenda;
    }
  }
};
</script>

<style scoped>
.card {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #01b08e;
}
</style>
