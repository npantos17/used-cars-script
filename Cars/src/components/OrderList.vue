<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="orders.length"
      :per-page="perPage"
      aria-controls="orders-table"
    ></b-pagination>
    <b-table
      id="orders-table"
      hover
      fixed
      :items="orders"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"

    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="orders.length"
      :per-page="perPage"
      aria-controls="orders-table"
    ></b-pagination>

    <!-- <b-table
      hover
      v-if="cars.length"
      sticky-header="800px"
      :items="cars"
      :fields="fields"
      head-variant="light"
    >
      <template v-slot:cell(action)="row">
        <b-button variant="danger" @click="getItem(row.item.id)"
          >Delete</b-button
        >
      </template>
    </b-table>
    <h1 v-else>No cars currently availbale</h1>-->
  </div> 
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'OrderList',

    data() {
      return {
        fields: ['id', 'carId', 'sellerId', 'buyerId', { key: 'id', tdClass: 'align-middle' }],
        items: [],
        currentPage: 1,
        perPage: 10
      }
    },

    computed: {
      ...mapState([
        'orders'
      ])
    },

    watch: {
      currentPage(nVal, oVal) {
        this.orders.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
          this.getItem(id).then( obj => this.items.push(obj) );
        });
      },

      imageIDs(nVal, oVal) {
        this.currentPage = 1;
        this.items = [];

        nVal.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
          this.getItem(id).then( obj => this.items.push(obj) );
        });
      }
    },

    mounted() {
      this.orders.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
        this.getItem(id).then( obj => this.items.push(obj) );
      });
    },

    methods: {
      ...mapActions([
        'getItem'
      ]),

    //   rowClicked(record, index) {
    //     this.$router.push({ name: 'Single', params: { id: record.objectID } });
    //   }
    }
  }

</script>

<style scoped>
  .pagination {
    justify-content: center;
  }
</style>