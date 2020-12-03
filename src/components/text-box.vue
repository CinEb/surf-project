<template>
    <div class="text__box" :class="{'text__box--align-left': reversed.alignLeft}">
        <div class="text-wrapper" :class="{'text-wrapper--reverse': reversed.alignLeft}">
            <span class="line"></span>
            <div class="text">
                {{text}}
            </div>
        </div>
        <h3 class="title">
            {{title}} <span class="title__divider" :style="this.display[this.showLine()]">|</span> {{titleAfterLine}}
        </h3>
    </div>
</template>

<script>
    export default {
        name: "text-box",
        props:{
            text: String,
            title: String,
            titleAfterLine: String,
            line: Boolean,
            alignLeft: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                local:{
                    line:{},
                },
                display:[
                    'display: unset',
                    'display: none'
                ],
                reversed:{
                    alignLeft: true,
                },
            }
        },
        created(){
            this.reversed.alignLeft = this.alignLeft;
        },
        methods:{
            showLine(){
                this.local.line = this.line;
                if (this.local.line === true){
                    return 0;
                } else {
                    return 1;
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/global";
    .text-wrapper--reverse{
        flex-direction: row-reverse;
    }
    .text__box--align-left{
        align-items: flex-start !important;
    }

    .text__box{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .text-wrapper{
            display: flex;
            align-items: center;
        }
        .line{
            @extend %textBoxLine;
        }
        .text{
            @extend %subText;
        }
        .title{
            @include margin(20px 0);
            @extend %text;

            .title__divider{
                font-weight: 300;
                color: $secondary-text-color;
            }
        }
    }
</style>