<template>
    <div class="title-element">
        <span class="title-element__line"></span>
        <span class="title-element__text"><h3>{{titleElementText}}</h3></span>
        <span class="title-element__text--transparent">{{titleElementTextTransparent}}</span>
    </div>
</template>

<script>
    export default {
        name: "title-element",
        props: {
            titleElementText: String,
            titleElementTextTransparent: String,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/global";
    .title-element{
        display: inline-block;
        position: relative;
        max-width: 467px;
        margin-left: auto;
        &__line{
            content: '';
            display: block;
            margin-left: auto;
            margin-right: rem(-20);
            width: 80px;
            height: 1px;
            background-color: $primary-color;
        }
        &__text{
            position: absolute;
            top: 0;
            right: rem(-20);
            h3{@extend %title;}
        }
        &__text--transparent{
            @extend %title;
            @include font-size(156px);
            max-width: 467px;
            opacity: 0.07;
        }
    }
</style>