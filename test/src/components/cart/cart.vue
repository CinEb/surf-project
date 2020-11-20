<template>
    <div class="cart container">
        <nav-block>

        </nav-block>

        <cart-body>

        </cart-body>

    </div>
</template>

<script>
    import cartBody from './cart-body.vue';
    export default {
        name: "cart",
        components:{
            cartBody
        },
        props: {
            local: String,
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

    .cart{
        @extend %title;
        min-height: 100vh;

        @extend %paddingLeftContainer;
        @extend %paddingRightContainer;
    }

</style>