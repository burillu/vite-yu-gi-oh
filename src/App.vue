<template>
  <header>
    <AppHeader />
  </header>
  <main class="bg-warning">
    <div class="container bg-white">
      <AppCardsCount :num="store.cardList.length" />

      <AppSelect @filter-card="filterSelection" />
      <AppLoader v-if="store.loading" />
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
import AppCardsCount from './components/AppCardsCount.vue';
import AppLoader from './components/AppLoader.vue'


export default {
  name: 'App',
  data() {
    return {

      store,
      params: {
        num: 100,
        offset: 0,
        archetype: null
      }
    };
  },
  methods: {
    cardPrint() {
      store.loading = true;
      // return axios.get(store.apiUrl,{params:this.params})
      axios.get(store.apiUrl, { params: this.params }).then((resp) => {
        //console.log(resp);

        store.cardList = resp.data.data
        //console.log(store.cardList)
      }).finally(function () {
        store.loading = false;
      });
    },
    filterSelection(data) {

      if (data) {
        this.params.archetype = data;

      } else {
        this.params.archetype = null;
      }
      this.cardPrint()


    },
    archetypePrint() {
      axios.get(store.apiUrlArchetype).then(resp => {
        //console.log(resp)
        store.archetype = resp.data
      })
    }
  },
  components: { AppHeader, AppCard, AppSelect, AppCardsCount, AppLoader },
  computed: {

  },
  mounted() {
    // axios.get(store.apiUrl).then((resp) => {
    //   //console.log(resp);
    //   this.store.cardList = resp.data.data.results
    //   console.log(this.store.cardList)
    // })
  },
  created() {
    // this.cardPrint();
    // this.archetypePrint();

    //per provare Promise
    function cardBase() {

      return axios.get(store.apiUrl, { params: { num: 150, offset: 0 } })
    }
    function archetypeBase() {
      return axios.get(store.apiUrlArchetype)
    }
    Promise.all([cardBase(), archetypeBase()])
      .then(function (results) {
        const acct = results[0];
        const perm = results[1];
        store.cardList = acct.data.data;
        store.archetype = perm.data
      }).finally(function () {
        store.loading = false;
      });
  }
}
</script>

<style lang="scss" scoped></style>