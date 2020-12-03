<template>

    <div class="cart-item-description-block" v-bind:Style="[areStarsActive ? 'display: flex;' : '']">
        {{itemText}}:
        <span class="text">{{itemTitle}}</span>
        <span class="stars"
              v-if="areStarsActive"
        >
            <v-stars-block
                    :stars-count="starsCount"
            />
        </span>
        <span class="incrementer"
             v-if="isIncrementerActive"
        >
            <span class="decrement" @click="decrement">-</span>
            <span class="increment" @click="increment">+</span>
        </span>
    </div>
</template>

<script>
import vStarsBlock from '../stars-block.vue'

export default {
  name: 'cart-item-description',
  components: {
    vStarsBlock
  },
  props: {
    itemText: {
      type: String,
      default: ''
    },
    itemTitle: {
      return () {}
    },
    starsCount: {
      type: Number,
      default: 0
    },
    areStarsActive: {
      type: Boolean,
      default: false
    },
    isIncrementerActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    decrement () {

    },
    increment () {

    }
  }

}
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

    .cart-item-description-block{
        display: block;
        align-items: center;
        flex-wrap: wrap;

        .text{
            @extend %text;
            @include font-size(24px);
            margin-left: 1rem;
        }

        //incrementer
        .incrementer{
            @extend %text;
            font-size: rem(30);
            line-height: rem(30);
            text-align: right;
            margin-top: -60px;
            color: $primary-color;

            span{
                cursor: pointer;
            }
            .decrement{
                padding: 0 5px;
            }
        }
    }
</style>
