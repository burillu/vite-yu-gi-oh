<template>
    <div class="bg-black fw-bold text-white p-2">
        <span>
            Sono state trovate {{ num }} carte
        </span>
    </div>
</template>

<script>
export default {
    name: 'AppCardsCount',
    props: {
        num: Number
    }
}
</script>

<style lang="scss" scoped></style>