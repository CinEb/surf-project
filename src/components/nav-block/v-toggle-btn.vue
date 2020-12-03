<template>
    <div class="v-toggle-btn">
        <div class="nav-toggle" @click="toggleNav">
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'v-toggle-btn',
  props: {
    nav: {
      return () {}
    }
  },
  methods: {
    toggleNav () {
      const nav = this.nav
      nav.contains('active') ? nav.remove('active') : nav.add('active')
      // return nav;
    }
  }
}
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

    .v-toggle-btn{
        .nav-toggle{
            display: unset;
            width: 28px;
            height: 20px;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            position: relative;
            @media(min-width: 871px){
                display: none;
            }
            @media(max-width: 870px){
                display: flex;
            }

            &:hover{
                span, span:before, span:after{
                    width: 100%;
                    background-color: $primary-color;
                }

            }

            span{
                content: '';
                position: absolute;
                width: 22px;
                height: 2px;
                background-color: $secondary-color;
                transition: ease all .1s;

                &:before, &:after{
                    content: '';
                    position: absolute;
                    width: 22px;
                    height: 2px;
                    background-color: $secondary-color;
                    transition: ease all .1s;
                }

                &:before{
                    bottom: 7px;
                }
                &:after{
                    bottom: -7px;
                }
            }
        }
    }
</style>
