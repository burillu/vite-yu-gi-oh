<template>
    <select class="form-select" @change="$emit('filterCard', selection)" v-model="selection"
        aria-label="Default select example">
        <option selected value="">All</option>
        <option v-for="item in store.archetype" :value="item.archetype_name">{{ item.archetype_name }}</option>

    </select>
</template>

<script>
import { store } from '../data/store'
export default {
    name: 'AppSelect',

    data() {
        return {
            selection: '',
            store
        }
    }



}
</script>

<style lang="scss" scoped>
select {
    width: 20%;
}
</style>