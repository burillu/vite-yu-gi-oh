<template>
    <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppLoader'
}
</script>

<style lang="scss" scoped>
div.spinner-border {
    width: 20em;
    height: 20em;
}

// div {
//     background-color: rgba(255, 252, 252, 0.486);
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;

// }
</style>