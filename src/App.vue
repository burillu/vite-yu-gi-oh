<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <div class="container">
      <div class="row">
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


export default {
  name: 'App',
  data() {
    return {
      nome: "pippo",
      store
    };
  },
  methods: {
    cardPrint() {
      axios.get(store.apiUrl).then((resp) => {
        //console.log(resp);
        store.cardList = resp.data.data
        //console.log(store.cardList)
      })
    }
  },
  components: { AppHeader, AppCard },
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