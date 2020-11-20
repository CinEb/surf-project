<template>
    <div class="v-info-block">
        <div class="block">
            <div class="block__name"
                 v-if="local.blockIncrement"
            >
                {{incrementer + ' ' +blockName}}
            </div>
            <div class="block__name"
                 v-else
            >
                {{blockName}}
            </div>
            <div class="block__text">
                {{blockText}}
            </div>
            <div class="block__increment"
                 v-if="local.blockIncrement"
            >
                <span class="decrement" @click="decrement">-</span>
                <span class="increment" @click="increment">+</span>
            </div>
            <div class="block__small-text"
                 v-if="local.blockSmallTextActive"
            >
                {{blockSmallText}}
            </div>
        </div>
    </div>
</template>

<script>
    // import {eventBus} from '../index';

    export default {
        name: "info-block",
        props:['blockName', 'blockText', 'blockSmallText', 'activeIncrement','activeSmallText',
            'maxIncrementer','incrementer'],
        data(){
            return{
                local:{
                    blockIncrement: false,
                    blockSmallTextActive: false,
                    incrementer: 0,
                    maxIncrement: null,
                }
            }
        },
        created(){
            this.local.blockIncrement = this.activeIncrement;
            this.local.blockSmallTextActive = this.activeSmallText;
            this.local.maxIncrement = this.maxIncrementer;
            this.local.incrementer = this.incrementer;
        },
        updated(){
            this.local.incrementer = this.incrementer;
            this.sendIncrementer();
        },
        methods:{
            sendIncrementer(){
                this.$emit('sendIncrementer', this.local.incrementer);
            },
            increment(){
                if(this.local.incrementer < this.local.maxIncrement){
                    this.local.incrementer++;
                    this.sendIncrementer();
                }
            },
            decrement(){
                this.local.incrementer--;
                if(this.local.incrementer < 0){
                    this.local.incrementer = 0;
                };
                this.sendIncrementer();
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

    .v-info-block{
        min-height: 250px;
        position: relative;
        margin-left: 30px;
        .block{
            &__name{
                @extend %text;
                /*line-height: rem(40);*/
                width: 250px;
                min-height: 80px;
            }
            &__text{
                display: block;
                position: relative;
                top: 32px;
                left: -150px;
                text-align: right;
                @extend %infoBlockText;
                transform: rotate(-90deg);
            }
            &__increment{
                @extend %text;
                @include font-size(30px);
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
            &__small-text{
                position: absolute;
                top: 75px;
                right: 0;
                @extend %lightText;
                /*font-size: rem(12);*/
                @include font-size(12px !important);
                text-transform: uppercase;
            }
        }
    }

</style>