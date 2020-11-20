<template>
    <div class="cart-body">
        <div class="travel">
            <div class="travel__title">
                Travel
            </div>
            <div class="travel__wrapper"
                 v-if="CART.travel.length"
            >
                <cart-item
                        v-for="(item, index) in CART.travel"
                        :key="index"

                        :cart-item="CART"
                        :cart-item-index="CART.travel[index]"

                        :title="[
                            SURF_BEACHES[item.index].location,
                            SURF_BEACHES[item.index].title,
                            SURF_BEACHES[item.index].travel.airline,
                            SURF_BEACHES[item.index].travel.distance,
                            SURF_BEACHES[item.index].travel.travelTime,
                            SURF_BEACHES[item.index].travel.pricing*item.quantity + ' $'
                            ]"

                        :item-img="SURF_BEACHES[item.index].travel.beachImage"

                        @deleteFromCart="deleteFromCart(item, index)"

                >
                </cart-item>
            </div>
        </div>
        <div class="resort">
            <div class="resort__title">
                Resort
            </div>
            <div class="resort__wrapper"
                 v-if="CART.sleep.length"
            >
                <cart-item
                        v-for="(item, index) in CART.sleep"
                        :key="index"

                        :cart-item="CART"
                        :cart-item-index="CART.sleep[index]"

                        :item-img="SURF_BEACHES[item.index].resorts.resortImage"
                        :item-resort-stars="SURF_BEACHES[item.index].resorts.resortStars"

                        :title="[
                            SURF_BEACHES[item.index].location,
                            SURF_BEACHES[item.index].title,
                            SURF_BEACHES[item.index].resorts.resortRating,
                            SURF_BEACHES[item.index].resorts.nights,
                            SURF_BEACHES[item.index].resorts.guests,
                            SURF_BEACHES[item.index].resorts.resortPricePerNight*item.quantity + ' $'
                        ]"

                        @deleteFromCart="deleteFromCart(item, index)"

                >
                </cart-item>
            </div>


        </div>
        <div class="shop">
            <div class="shop__title">
                shop
            </div>
            <div class="shop__wrapper"
                 v-if="CART.surfBoards.length"
            >
                <cart-item
                        v-for="(item, index) in CART.surfBoards"
                        :key="index"

                        :cart-item="CART"
                        :cart-item-index="CART.surfBoards[index]"

                        :item-img="GET_SURFBOARDS[item.index].boardImage"
                        :item-resort-stars="GET_SURFBOARDS[item.index].rating"

                        :title="[
                            GET_SURFBOARDS[item.index].name,
                            '',
                            GET_SURFBOARDS[item.index].price*item.quantity  + ' $',
                            GET_SURFBOARDS[item.index].descriptions[0].desc +
                            GET_SURFBOARDS[item.index].descriptions[1].desc +
                            GET_SURFBOARDS[item.index].descriptions[2].desc,
                            GET_SURFBOARDS[0].addons.firstAddon.name +
                            GET_SURFBOARDS[0].addons.firstAddon.price + ' $, ' +
                            GET_SURFBOARDS[0].addons.secondAddon.name +
                            GET_SURFBOARDS[0].addons.secondAddon.price + ' $.',
                        ]"

                        @deleteFromCart="deleteFromCart(item, index)"

                />
            </div>
        </div>
        <div class="order">
            <div class="total-cost">
                Total Cost: {{cartTotalCost | toFix}} $
            </div>
            <div class="order-btn">
                <btn-element
                        btn-text="Order - Now"
                        :is-arrow-show=true
                ></btn-element>
            </div>
        </div>
    </div>
</template>

<script>
    import cartItem from './cart-item.vue';
    import {mapGetters, mapActions} from 'vuex';
    import toFix from '../../filters/priceFix';
    import {eventBus} from "../../index";

    export default {
        name: "cart-body",
        components: {
            cartItem
        },
        filters:{
          toFix
        },
        computed:{
            ...mapGetters([
                'SURF_BEACHES',
                'GET_SURFBOARDS',
                'CART'
            ]),
            cartTotalCost(){
                let result = 0;
                if(this.CART.travel.length){
                    let travelResult = [];
                    for (let item of this.CART.travel){
                        travelResult.push(item.quantity * this.SURF_BEACHES[item.index].travel.pricing)
                    }
                    travelResult = travelResult.reduce(function (sum, el){
                        return sum + el;
                    });
                    result = result + travelResult;
                }
                if(this.CART.sleep.length){
                    let sleepResult = [];
                    for (let item of this.CART.sleep){
                        sleepResult.push(item.quantity * this.SURF_BEACHES[item.index].resorts.resortPricePerNight)
                    }
                    sleepResult = sleepResult.reduce(function (sum, el){
                        return sum + el;
                    });
                    result = result + sleepResult;
                }
                if(this.CART.surfBoards.length){
                    let surfBoardsResult = [];
                    for (let item of this.CART.surfBoards){
                        surfBoardsResult.push(item.quantity * this.GET_SURFBOARDS[item.index].price)
                    }
                    surfBoardsResult = surfBoardsResult.reduce(function (sum, el){
                        return sum + el;
                    });
                    result = result + surfBoardsResult;
                }
                return result;
            }
        },
        methods:{
            ...mapActions([
                'GET_DELETE_FROM_CART',
            ]),
            deleteFromCart(item, index){
                this.GET_DELETE_FROM_CART({item, index});
            }
        }
    }

</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

    .cart-body{
        @extend %subText;
        .travel, .resort, .shop{
            @include padding(80px 0);

            &__title{
                @extend %title;
            }
        }

        .shop{

            :after{
                box-shadow: none;
            }

        }

        .order{
            display: flex;
            flex-direction: column;
            @extend %text;
            .total-cost{
                text-align: center;
                @include padding(80px 0);
            }
            .order-btn::v-deep{
                display: flex;
                justify-content: center;
                .v-btn-element{
                    .btn-text{
                        @include padding(16px);
                    }
                }
                @include padding-bottom(160px);
            }
        }
    }
</style>