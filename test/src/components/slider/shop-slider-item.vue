<template>
    <div class="v-shop-slider">
        <div class="shop__slider">
            <div class="shop__left-block">
                <text-box
                        :line=false
                        :align-left=true
                        text="style"
                        :title="boardName"
                />
                <stars-block
                        :starsCount="boardRating"
                />
                <div class="left-block__price">
                    $ {{boardPrice | toFix}}
                </div>
                <div class="slider__btn-wrapper"
                     @click="addToCart()"
                >
                    <btn-element
                            btnText="Drop - In"
                    />
                </div>

            </div>
            <div class="shop__center-right">
<!--                <div class="shop__img-bg">-->
<!--                    <img :src="'assets/img/shop-section/wavebg.jpg'" :alt="'assets/img/shop-section/wavebg.jpg'">-->
<!--                </div>-->
                <div class="shop__center-block">
                    <div class="center-block__board-img">
                        <img :src="boardImage" :alt="boardImage">
                        <board-point
                                v-for="(item, index) in boardPointInfo"
                                :key="index"
                                :pointPositionTop="item.position.top"
                                :pointPositionLeft="item.position.left"
                                :boardPointInfoText="item.desc"
                                :isLineReversedProp="item.toLeftAnim"
                        />
                    </div>
                </div>
                <div class="shop__right-block">
                    <div class="shop__right-block-wrapper">
                        <div class="right-block__first-image">
                            <div class="right-block__text">
                                {{rightBlockTitle}}
                            </div>
                            <img :src="additionalImage" :alt="additionalImage">
                            <div class="text">
                                {{additionalText}}
                            </div>
                            <div class="price">
                                $ {{additionalPrice | toFix}}
                            </div>
                        </div>
                        <div class="right-block__second-image">
                            <img :src="additionalImage2" :alt="additionalImage2">
                            <div class="text">
                                {{additionalText2}}
                            </div>
                            <div class="price">
                                $ {{additionalPrice2 | toFix}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import boardPoint from '../shop-section/board-point.vue';
    import toFix  from '../../filters/priceFix';
    import {mapActions} from 'vuex';

    export default {
        name: "shop-slider-item",
        components:{
            boardPoint
        },
        props:{
            //leftBlock informations
            boardIndex: Number,
            boardName:{
                type: String,
                default: 'north nugget tt surfboard'
            },
            boardRating:{
                type: Number,
                default: 5
            },
            boardPrice:{
                type: Number,
                default: 400,
            },
            boardImage:{
                type: String,
                default: 'assets/img/shop-section/surfboard.svg'
            },


            //surBoard information and point position
            boardPointInfo:{
                type: Array,
                default(){
                    []
                }
            },

            //rightBlock information
            rightBlockTitle:{
                type: String,
                default: 'Extras',
            },
            //rightVBlock first additional
            additionalImage:{
                type: String,
                default: 'assets/img/shop-section/wax.svg',
            },
            additionalText:{
                type: String,
                default: 'Sex Wax',
            },
            additionalPrice:{
                type: Number,
                default: 24.99,
            },
            //rightVBlock second additional
            additionalImage2:{
                type: String,
                default: 'assets/img/shop-section/bracelet.svg',
            },
            additionalText2:{
                type: String,
                default: 'Pura Vida',
            },
            additionalPrice2:{
                type: Number,
                default: 27.99,
            },
        },
        data(){
            return{
                isBoardPointInfoActive: false
            }
        },
        filters:{
            toFix,
        },
        methods:{
            ...mapActions([
                'GET_CART'
            ]),
            addToCart(){
                let index = this.boardIndex;
                let name = 'surfBoards';
                let val = {index, name};
                this.GET_CART(val);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

    .shop__slider{
        display: flex;
        @extend %paddingLeftContainer;
        @include padding-top(140px);

        .shop{
            &__left-block::v-deep{
                margin-top: 4%;
                min-height: 650px;

                .v-stars-block{
                    @include margin-left(-15px);
                    padding-bottom: 0;
                }
                .left-block__price{
                    @include margin-bottom(70px);
                    @extend %text;
                }
                .v-btn-element{
                    .btn-text{
                        padding-left: 0;
                    }
                }
            }
            &__center-right{
                position: relative;
                display: flex;
                width: 100%;
                .shop{
                    &__img-bg{
                        position: absolute;
                        display: flex;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        z-index: 1;

                        &::after{
                            @extend %imageShadowRight;
                            background-color: rgba(0, 0, 0, 0.6);
                        }

                        img{
                            width: 100%;
                            height: 90%;
                        }
                    }
                    &__center-block{
                        position: relative;
                        z-index: 3;
                        margin-left: 25%;

                        width: 70%;
                        .center-block__board-img{
                            position: absolute;
                            height: 100%;
                            width: 240px;

                            img{
                                height: 100%;
                            }
                            .board__point{
                                width: 20px;
                                height: 20px;
                                border-radius: 50%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                position: absolute;
                                top: 30%;
                                left: 75%;
                                background: $default-color;
                                color: $primary-color ;
                                font-weight: 700;
                                @include font-size(24px);
                                cursor: pointer;

                                &-info{
                                    display: flex;
                                    align-items: center;
                                    position: absolute;
                                    right: -375px;

                                    animation: info 1s ease;

                                    @keyframes info{
                                        from{opacity: 0;right: 0;}
                                        to{opacity: 1;right: -375px;}
                                    }

                                    .line{
                                        @extend %textBoxLine;
                                    }
                                    .text{
                                        @extend %text;
                                        @include font-size(18px);
                                        display: block;
                                        width: 260px;
                                        /*width: 100%;*/
                                    }
                                }
                            }
                        }

                    }
                    &__right-block{
                        /*display: flex;*/
                        /*justify-content: space-around;*/
                        /*align-items: flex-end;*/
                        width: 100%;
                        z-index: 2;
                        position: relative;

                        &-wrapper{
                            display: flex;
                            width: 100%;
                            justify-content: space-around;
                            align-items: flex-end;
                            position: absolute;
                            bottom: 0;

                            .right-block__text{
                                @extend %text;
                                @include font-size(18px !important);
                                @include margin-bottom(25px);
                            }

                            img{
                                display: block;
                                margin: 0 auto;
                            }

                            .text{
                                @extend %lightText;
                                @include font-size(18px);
                                @include margin-top(36px);
                                @include margin-bottom(16px);
                                text-transform: uppercase;
                                letter-spacing: 8px;
                                text-align: center;
                            }

                            .price{
                                @extend %text;
                                @include font-size(18px !important);
                                text-align: center;
                            }

                        }
                    }
                }
            }
        }
    }

    @media(max-width: 1280px){
        .v-shop-slider{
            .shop__slider{
                flex-wrap: wrap;
                @include padding-right(80px);
                .shop{
                    &__center-right{
                        flex-wrap: wrap;

                        .shop__right-block-wrapper{
                            position: relative;
                        }
                    }
                    &__center-block{
                        width: auto;
                        margin: 0 auto;

                        .center-block__board-img{
                            position: relative;
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 900px){
        .v-shop-slider{
            .shop__slider{
                .shop{
                    &__center-block::v-deep{
                        .board__point-info{
                            /*display: none;*/
                        }
                    }
                }
            }
        }
    }
</style>