<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <OrderList />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import OrderList from '@/components/OrderList.vue';
  import { mapActions, mapState, mapMutations  } from 'vuex';

  export default {
    name: 'Orders',
    
    components: {
      Header,
      OrderList
    },

    data() {
        return {
            subtitle: '',
        }
    },

    computed: {
      ...mapState([
        'orders',
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
         'fetchOrders'
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
       this.fetchOrders();
        
    },

    
  }
</script>

<style scoped>

</style>
