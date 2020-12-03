<template>
    <div class="v-btn-element">
        <a class="btn"
           v-if="btnLinkDeactive !== true"
           :href="btnLink"
           v-smooth-scroll
        >
          <span class="btn-left"></span>
          <span class="btn-right"></span>
          <span class="btn-text">
              {{btnText}}
          </span>
          <span class="btn-img" v-if="isArrowShow">
              <img :src="ARROWS.arrowRight" :alt="ARROWS.arrowRight">
          </span>
        </a>
        <a class="btn" v-else>
            <span class="btn-left"></span>
            <span class="btn-right"></span>
            <span class="btn-text">
              {{btnText}}
            </span>
            <span class="btn-img" v-if="isArrowShow">
                <img :src="ARROWS.arrowRight" :alt="ARROWS.arrowRight">
            </span>
        </a>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'btn-element',
  props: {
    btnText: String,
    btnLink: {
      type: String,
      default: '#'
    },
    btnLinkDeactive: {
      type: Boolean,
      default: false
    },
    isArrowShow: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  computed: {
    ...mapGetters([
      'ARROWS'
    ])
  }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/global';

    .v-btn-element{
        display: inline-block;
        .btn{
            display: flex;
            position: relative;
            cursor: pointer;

            &:hover{
                .btn-right{
                    width: 100%;
                }
            }

            &-left{
                position: absolute;
                left: 0;
                height: 100%;
                width: calc(50% - 20px);
            }
            &-right{
                transition: all ease 0.4s;
                content: '';
                position: absolute;
                right: 0;
                height: 100%;
                width: calc(50% + 20px);
                background-color: $primary-color;
            }
            &-text{
                @extend %text;
                margin: auto 0;
                z-index: 1;
                text-align: center;
                padding-left: 16px;
            }
            &-img{
                display: flex;
                align-items: center;
                margin: 0 16px;
                img{
                    position: relative;
                    z-index: 1;
                }
            }
        }
    }
</style>
