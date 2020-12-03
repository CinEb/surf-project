<template>
    <div class="cart" v-bind:class="{cartTop16: !WINDOW_WIDTH.isDesktop}">
        <div class="cart-wrapper">
            cart
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'cart-link',
  computed: {
    ...mapGetters([
      'WINDOW_WIDTH'
    ])
  }
}
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';
    .cartTop16{
        top: 16% !important;
    }

    .cart{
        position: fixed;
        top: 7%;
        right: 5%;
        cursor: pointer;
        z-index: 10;
        &-wrapper{
            background-color: $primary-color;
            width: rem(80);
            height: rem(80);
            @extend %text;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: -20px 0px 13px -7px rgba(74,246,205,0.8), 20px 0px 13px -7px rgba(74,246,205,0.8);
        }
    }

    @media(max-width: 720px){
        .cart-wrapper{
            width: rem(60px);
            height: rem(60px);
        }
    }

</style>
