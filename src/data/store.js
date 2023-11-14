import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    apiUrlArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cardList: [],
    archetype: [],
    loading: true

});