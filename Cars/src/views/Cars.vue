<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <CarList />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import CarList from '@/components/CarList.vue';
  import { mapActions, mapState, mapMutations  } from 'vuex';

  export default {
    name: 'Cars',
    
    components: {
      Header,
      CarList
    },

    data() {
        return {
            subtitle: '',
        }
    },

    computed: {
      ...mapState([
        'cars',
        'token'
      ])
    },  

    // watch: {
    //   $route() {
    //     this.subtitle = this.$route.params.name;
    //     this.depID = this.$route.params.id;

    //     this.fetchIDsByDepartment(this.depID);
    //   }
    // },

    methods: {
       ...mapActions([
         'fetchCars'
       ]),
       ...mapMutations([
        'removeToken',
        'setToken'
      ]),

    },

   

    mounted() {
        // this.subtitle = this.$route.params.name;
        // this.depID = this.$route.params.id;

        
        if (localStorage.token) {
          this.setToken(localStorage.token);
          //console.log("eo ga token")
       }
       this.fetchCars();
        
    },

    
  }
</script>

<style scoped>

</style>
