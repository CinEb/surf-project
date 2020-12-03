<template>
    <div class="cart-item">
        <div class="cart-item__wrapper">
            <div class="cart-item__img"
                 v-if="WINDOW_WIDTH.isDesktop || WINDOW_WIDTH.isSmallDesktop || WINDOW_WIDTH.isTablet"
            >
                <img
                        :src="itemImg"
                        :alt="itemImg"
                >
            </div>
            <div class="cart-item__description"

            >
                <cart-item-description
                        v-for="(item, index) in local.cartItemDescription"
                        :key="index"

                        :item-text="item.text"
                        :item-title="title[index]"
                        :are-stars-active="item.areStarsActive"
                        :stars-count="setStarsCount(item)"
                        :is-incrementer-active="item.isIncrementerActive"
                />
                <div class="cart-item__quantity">
                    QTY:
                    <span class="text">
                        {{cartItemIndex.quantity}}
                    </span>
                </div>

                <div class="cart-item__btn"
                     @click="deleteFromCart"
                >
                    <btn-element
                            btn-text="DELETE"
                            :is-arrow-show=false
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cartItemDescription from './cart-item-description.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'cart-item',
  components: {
    cartItemDescription
  },
  props: {
    title: {
      type: Array,
      default () {
        return []
      }
    },
    cartItem: {
      type: Object,
      default () {
        return {}
      }
    },
    cartItemIndex: {
      type: Object,
      default () {
        return {}
      }
    },
    itemImg: {
      type: String,
      default: ''
    },
    itemResortStars: {
      type: Number,
      default: 0
    },
    itemMaxNights: {
      type: String,
      default: ''
    },
    itemMaxGuests: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      local: {
        cartItemDescription: {},
        starsCount: Number,
        quantity: ''
      }
    }
  },
  created () {
    this.setCartItemDescription()
  },
  mounted () {
    this.$set(this.cartItemIndex, 'quantity', 1)
  },
  computed: {
    ...mapGetters([
      'WINDOW_WIDTH'
    ])
  },
  methods: {
    setCartItemDescription () {
      if (this.cartItemIndex.name === 'travel') {
        this.local.cartItemDescription = this.cartItem.travelItem
      }
      if (this.cartItemIndex.name === 'sleep') {
        this.local.cartItemDescription = this.cartItem.sleepItem
      }
      if (this.cartItemIndex.name === 'surfBoards') {
        this.local.cartItemDescription = this.cartItem.surfBoardsItem
      }
    },
    setStarsCount (item) {
      if (this.cartItemIndex.name === 'travel') {
        return item.starsCount
      }
      if (this.cartItemIndex.name === 'sleep') {
        return this.itemResortStars
      }
      if (this.cartItemIndex.name === 'surfBoards') {
        return this.itemResortStars
      }
    },
    deleteFromCart () {
      this.$emit('deleteFromCart')
    }
  }
}
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

    .cart-item{
        &__wrapper{
            display: flex;
            @include padding(80px 0)
        }
        &__img{
            position: relative;
            max-width: 35%;
            height: 450px;
            width: 100%;

            &:after{
                @extend %imageShadowLeft;
            }

            img{
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }
        &__description{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @include margin-left(80px);

            @media(max-width: 720px){
                margin-left: 0;
            }
            .text{
                @extend %text;
                @include font-size(24px);
            }

        }

        .cart-item__btn::v-deep{
            display: flex;
            justify-content: center;

            .v-btn-element{
                display: flex;
                .btn-text{
                    @include padding(16px);
                }

            }
        }
    }

</style>
