<template>
  <nav>
    <ul class="nav-dashboard-tools">
      <li style="color: #d0efff;">
        Sitio:&nbsp;
        <select v-model="selectedWebsiteId" @change="websiteData()">
          <option v-for="website in userWebsites" :key="website.id_website" :value="website.id_website">{{ website.name }}</option>
        </select>
      </li>
      <li @click="toggleNotesContainer()">
        Notas
      </li>
      <li @click="toggleWorkspace('leads')">
        Prospectos
      </li>
      <li @click="toggleWorkspace('email')">
        Email
      </li>
    </ul>
    <ul>
      <li @click="logOut()">Cerrar sesión</li>
    </ul>
  </nav>
</template>

<script>
import axios from '@/lib/axios';
export default {
  name: 'NavigationBarComponent',
  props: {
      userWebsites: {
          type: Array,
          required: true
      }
  },
  data() {
    return {
      selectedWebsiteId: null
    }
  },
  methods: {
    websiteData(){
      let formData = new FormData();
      let id = this.selectedWebsiteId;
      formData.append('id_website', id);
      axios.post('/dashboard/dashboardData', formData, { withCredentials: true })
           .then(res=>{
              const dashboard = {
                website: id,
                dashboard: res.data
              };
              this.$emit('dashboard-data', dashboard);
           })
           .catch(error =>{
              console.log(error);
           });
    },
    toggleNotesContainer(){
      this.$emit('toggle-aside');
    },
    toggleWorkspace(tool){
      this.$emit('toggle-workspace', tool);
    },
    logOut(){

      let formData = new FormData();
      formData.append('log_out', 1);

      axios.post('/user/logout', formData)
           .then(() => {
              this.$emit('logged-out');
           })
           .catch(error => {
              console.error(error);
           });
    },
  }
}
</script>

<style scoped>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary);
    z-index: 100;
    box-shadow: 0px 4px 6px #222;
    padding: 1rem;
    color: white;
    grid-column: 1/3;
    grid-row: 1/2;
  }

  ul {
    list-style: none;
    padding: 0px;
    display: flex;
    margin: 0px;
    align-items: center;
    
  }

  .nav-dashboard-tools {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  li{
    margin-right: 1rem;
  }

  li:hover{
    cursor:pointer;
    color: var(--accent);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

</style>
