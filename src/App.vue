<template>
  <header>
    <AppHeader />
  </header>
  <main class="bg-warning">
    <div class="container bg-white">
      <div class="bg-black fw-bold text-white p-2">
        <span>
          Sono state trovate {{ store.cardList.length }} carte
        </span>
      </div>
      <AppSelect @filter-card="filterSelection" />
      <div class="row py-4 gy-2">
        <div class="col-6 col-md-4 col-lg-3" v-for="(item, index) in store.cardList">
          <AppCard :name="item.name" :id="item.id" :src="item.card_images[0].image_url" />


        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { store } from './data/store.js'
import axios from 'axios';
import AppCard from './components/AppCard.vue';
import AppHeader from './components/AppHeader.vue';
import AppSelect from './components/AppSelect.vue';


export default {
  name: 'App',
  data() {
    return {

      store,
      params: {
        num: 20,
        offset: 0,
        archetype: null
      }
    };
  },
  methods: {
    cardPrint() {
      axios.get(store.apiUrl, { params: this.params }).then((resp) => {
        //console.log(resp);
        store.cardList = resp.data.data
        //console.log(store.cardList)
      })
    },
    filterSelection(data) {

      if (data) {
        this.params.archetype = data;

      } else {
        this.params.archetype = null;
      }
      this.cardPrint()

      console.log(this.params)
    }
  },
  components: { AppHeader, AppCard, AppSelect },
  mounted() {
    // axios.get(store.apiUrl).then((resp) => {
    //   //console.log(resp);
    //   this.store.cardList = resp.data.data.results
    //   console.log(this.store.cardList)
    // })
  },
  created() {
    this.cardPrint();
  }
}
</script>

<style lang="scss" scoped></style>