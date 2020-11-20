<template>
    <div class="v-surf__map">
        <div class="map">
            <img :src="SURF_SECTION.map" :alt="SURF_SECTION.map">
            <div class="points">
                    <div class="point"
                         v-for="(item, index) in SURF_BEACHES"
                         :key="index"
                         v-bind:style="item.position"
                         v-bind:class="{'point--active': index === SURF_SLIDER.currentSlide}"
                         @click="goToSlide(index)"
                         @mouseover="items.show = true"
                         @mouseleave="items.show = false"
                    >
<!--                        {{index}}-->
                        <transition name="fade">
                            <popup-element
                                           v-if="SURF_SLIDER.currentSlide === index || items.show"
                                           :beach="item.title"
                                           :country="item.location"
                                           :wave="item.wave"
                                           :water="item.water"
                                           :wind="item.wind"
                            ></popup-element>
                        </transition>
                    </div>
            </div><!-- points -->
        </div><!-- map -->
        <surf-slider ref="childSurfSlider"/>

    </div>
</template>

<script>
    import popupElement from './popup-element.vue'
    import surfSlider from './surf-slider.vue'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "surf-map",
        components: {
            surfSlider,
            popupElement
        },
        data(){
            return{
                items:{
                    show: false,
                    hover: false,
                }
            }
        },
        created() {
            this.GET_COUNT_SLIDES();
        },
        computed:{
            ...mapGetters([
                'SURF_SECTION',
                'SURF_BEACHES',
                'SURF_SLIDER'
            ])
        },
        methods:{
            ...mapActions([
                'GET_COUNT_SLIDES'
            ]),
            goToSlide(value){
                this.$refs.childSurfSlider.$refs.carousel.goTo(value);
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

    .v-surf__map{
        .map {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 90%;
            margin: 0 auto;
            img{
                width: 100%;
                height: 100%;
            }

            .points {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                .point{
                    position: absolute;
                    width: 25px;
                    height: 25px;
                    cursor: pointer;
                    border-radius: 50%;
                    transition: ease 0.3s;
                    background-color: $primary-color;
                    transform: rotate(45deg);

                    &:hover,&--active{
                        border-top-left-radius: 0;
                        box-shadow: 0 0 20px -2px $primary-color;
                        .v-popup{
                            display: block !important;
                        }
                    }
                    .fade-enter-active, .fade-leave-active {
                        transition: opacity .5s;
                    }
                    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
                        opacity: 0;
                    }

                    .v-popup{
                        display: none;
                        position: absolute;
                        transform: rotate(-45deg);
                        top: -837%;
                        left: -919%;
                    }
                }
            }
        }//map
        .v-surf__slider::v-deep{
            @include margin-top(110px);
        }
    }

    @media(max-width: 1400px){
        .v-surf__map{
            .map{
                width: 80%;
            }
        }
    }
    @media(max-width: 800px){
        .v-surf__map{
            .map{
                width: 70%;
            }
        }
    }
    @media(max-width: 580px){
        .v-surf__map{
            .map{
                width: 60%;
            }
        }
    }
    @media(max-width: 460px){
        .v-surf__map{
            .map{
                width: 40%;
            }
        }
    }
</style>