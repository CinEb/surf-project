<template>
    <div class="v-surf-app" id="surf-app">
        <keep-alive>
            <router-view>
            </router-view>
        </keep-alive>

        <router-link
                :to="{name: 'cart'}"
                v-if="isCartPageActive"
        >
            <cart-link>

            </cart-link>
        </router-link>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "v-app",
        data(){
            return{
                isCartPageActive: false,
            }
        },
        created(){
            this.GET_TRAVEL();
            this.GET_RESORTS_RATING();
            this.isCartChange();
        },
        updated(){
            this.isCartChange();
        },
        computed:{
            ...mapGetters([
                'CART'
            ])
        },
        methods:{
            ...mapActions([
                'GET_TRAVEL',
                'GET_RESORTS_RATING'
            ]),
            isCartChange(){
                this.isCartPageActive = this.$route.path !== '/cart';
            }
        }
    }
</script>