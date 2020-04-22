<template>
    <div id="app">
        <HomeComponent></HomeComponent>
    </div>
</template>

<script>
    import HomeComponent from './components/Home'

    export default {
        components: {
            HomeComponent
        },
        // el: '#app'
    }
</script>

<!--reset.scss 적용-->
<style lang="scss" src="./assets/commons/reset.scss">

</style>

