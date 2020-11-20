<template>
    <div class="v-stars-block">
        <img
                :src="STARS"
                :alt="STARS"
                v-for="n in starsCount"
        >
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "stars",
        props:{
            starsCount: {
                type: Number,
                default() {
                    return null
                }
            }
        },
        computed:{
            ...mapGetters([
                'STARS'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';
    
    .v-stars-block{
        display: flex;
        align-items: flex-end;
        padding-bottom: 12px;
    }

</style>