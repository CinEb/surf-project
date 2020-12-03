export default {
  state: {
    message: 'hello vuex',
    // 18.11.2020 change for all images path from ../assets... to assets...
    icons: {
      search: require('../assets/img/local/Search.svg'),
      poi: require('../assets/img/local/POI.svg')
    },
    arrows: {
      arrowRight: require('@/assets/img/local/arrow-right.svg'),
      arrowLeft: require('../assets/img/local/arrow-left.svg'),
      doubleArrowDown: require('../assets/img/local/arrow-down.svg')
    },
    stars: require('../assets/img/local/star.svg'),
    window: {
      isDesktop: true,
      isSmallDesktop: false,
      isTablet: false,
      isSmallTablet: false,
      isMobile: false
    }
  },
  mutations: {
    SET_WINDOW_WIDTH: (state) => {
      const vm = state.window
      if (window.innerWidth > 1280) {
        vm.isDesktop = true
        vm.isSmallDesktop = false
        vm.isTablet = false
        vm.isSmallTablet = false
        vm.isMobile = false
      } else if (window.innerWidth < 1281 && window.innerWidth > 1080) {
        vm.isDesktop = false
        vm.isSmallDesktop = true
        vm.isTablet = false
        vm.isSmallTablet = false
        vm.isMobile = false
      } else if (window.innerWidth < 1081 && window.innerWidth > 720) {
        vm.isDesktop = false
        vm.isSmallDesktop = false
        vm.isTablet = true
        vm.isSmallTablet = false
        vm.isMobile = false
      } else if (window.innerWidth < 721 && window.innerWidth > 480) {
        vm.isDesktop = false
        vm.isSmallDesktop = false
        vm.isTablet = false
        vm.isSmallTablet = true
        vm.isMobile = false
      } else if (window.innerWidth < 481) {
        vm.isDesktop = false
        vm.isSmallDesktop = false
        vm.isTablet = false
        vm.isSmallTablet = false
        vm.isMobile = true
      }
      window.addEventListener('resize', function () {
        if (window.innerWidth > 1280) {
          vm.isDesktop = true
          vm.isSmallDesktop = false
          vm.isTablet = false
          vm.isSmallTablet = false
          vm.isMobile = false
        } else if (window.innerWidth < 1281 && window.innerWidth > 1080) {
          vm.isDesktop = false
          vm.isSmallDesktop = true
          vm.isTablet = false
          vm.isSmallTablet = false
          vm.isMobile = false
        } else if (window.innerWidth < 1081 && window.innerWidth > 720) {
          vm.isDesktop = false
          vm.isSmallDesktop = false
          vm.isTablet = true
          vm.isSmallTablet = false
          vm.isMobile = false
        } else if (window.innerWidth < 721 && window.innerWidth > 480) {
          vm.isDesktop = false
          vm.isSmallDesktop = false
          vm.isTablet = false
          vm.isSmallTablet = true
          vm.isMobile = false
        } else if (window.innerWidth < 481) {
          vm.isDesktop = false
          vm.isSmallDesktop = false
          vm.isTablet = false
          vm.isSmallTablet = false
          vm.isMobile = true
        }
      })
    }
  },
  actions: {
    GET_WINDOW_WIDTH ({ commit }) {
      commit('SET_WINDOW_WIDTH')
    }
  },
  getters: {
    ARROWS (state) {
      return state.arrows
    },
    STARS (state) {
      return state.stars
    },
    ICONS (state) {
      return state.icons
    },
    WINDOW_WIDTH (state) {
      return state.window
    }
  }
}
