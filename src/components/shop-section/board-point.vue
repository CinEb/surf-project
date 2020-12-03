<template>
    <div class="v-board-point"
         :style="{
            top: pointPosition.top + '%',
            left: pointPosition.left + '%'
         }"
         @click="isBoardPointInfoActive = !isBoardPointInfoActive"
    >
        +
        <span class="board__point-info"
              v-if="isBoardPointInfoActive && WINDOW_WIDTH.isDesktop"
              :style="directionLine"
              :class="directionInfo"
        >
            <span class="line"></span>
            <span class="text">{{boardPointInfoText}}</span>
        </span>
        <span class="board__point-info disable-desktop"
              v-if="isBoardPointInfoActive && !WINDOW_WIDTH.isDesktop"
        >
            <span class="text">{{boardPointInfoText}}</span>
        </span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'board-point',
  props: {
    isLineReversedProp: {
      type: Boolean,
      default: false

    },
    boardPointInfoText: {
      type: String,
      default: 'todotex'
    },
    pointPositionTop: {
      type: Number,
      default: 40
    },
    pointPositionLeft: {
      type: Number,
      default: -5
    }
  },
  data () {
    return {
      isBoardPointInfoActive: false,
      isLineReversed: false,
      directionLine: 'flex-direction: row;',
      directionInfo: 'info',

      pointPosition: {
        top: '40',
        left: '-5'
      },

      isSmallWindow: false
    }
  },
  created () {
    this.isLineReversed = this.isLineReversedProp
    this.pointPosition.top = this.pointPositionTop
    this.pointPosition.left = this.pointPositionLeft
    this.isLineReversedFunc()
  },

  computed: {
    ...mapGetters([
      'WINDOW_WIDTH'
    ])
  },
  methods: {
    isLineReversedFunc () {
      if (this.isLineReversed === true) {
        this.directionLine =
                        'flex-direction: row-reverse;' +
                        'right: 10px;'

        this.directionInfo = 'infoReverse'
      } else {
        this.directionLine =
                        'flex-direction: row;' +
                        'right: -340px;'

        this.directionInfo = 'info'
      }
    }

  }
}
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

    .infoReverse{
        animation: infoReverse 1s ease;
        @keyframes infoReverse{
            from{opacity: 0;right: -250px;}
            to{opacity: 1;right: 10px;}
        }
    }
    .info{
        animation: info 1s ease;
        @keyframes info{
            from{opacity: 0;right: 0;}
            to{opacity: 1;right: -340px;}
        }
    }

    .v-board-point{
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

        .board__point-info{
            display: flex;
            align-items: center;
            position: absolute;
            width: 340px;

            .line{
                @extend %textBoxLine;
            }
            .text{
                @extend %text;
                @include font-size(18px !important);
                display: block;
                max-width: 240px;
            }
        }
        .disable-desktop{
            top: 100%;
            left: 0;
            transform: translateX(-50%);

            @media(max-width: 720px){
                width: auto;
            }
            .text{
                max-width: unset;
                width: 100%;
                text-align: center;
            }
        }
    }
</style>
