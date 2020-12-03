<template>
    <div class="travel__slider">
        <div class="slider__image">
            <img :src="beachImage" :alt="beachImage">
        </div>
        <div class="slider__place">
            <text-box
                    text="Shore"
                    :title="beachName"
                    v-bind:line="true"
                    :titleAfterLine="beachLocation"
            />
        </div>
        <div class="slider__airline">
            <text-box
                    text="Airline"
                    :title="airline"
                    v-bind:line="false"
                    v-bind:alignLeft="true"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: "travel-slider-item",
        props:['beachImage','beachName','beachLocation','airline']
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

</style>