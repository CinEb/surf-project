export default {
  headerSection: {
    currentLocation: 'California',
    // 18.11.2020 change images from ../assets... to assets...
    logoImage: require('@/assets/img/local/logo.svg'),
    headerNavLinksTitle: [
      { title: 'Surf' },
      { title: 'Travel' },
      { title: 'Sleep' },
      { title: 'Shop' }
    ],
    // 18.11.2020 change images from ../assets... to assets...
    headerNavLinkIcons: [
      { icon: 'assets/img/local/nav-ico-1.svg' },
      { icon: 'assets/img/local/nav-ico-2.svg' },
      { icon: 'assets/img/local/nav-ico-3.svg' },
      { icon: 'assets/img/local/nav-ico-4.svg' }
    ],
    roads: [
      {
        upperSubText: 'surf',
        title: 'North Shore',
        underTitleSubText: 'condition',
        bottomTitle: 'radical north'
      },
      {
        upperSubText: 'surf',
        title: 'East Shore',
        underTitleSubText: 'condition',
        bottomTitle: 'east radical'
      },
      {
        upperSubText: 'surf',
        title: 'West Shore',
        underTitleSubText: 'condition',
        bottomTitle: 'radical west'
      },
      {
        upperSubText: 'surf',
        title: 'South Shore',
        underTitleSubText: 'condition',
        bottomTitle: 'south radical'
      }
    ],
    currentSlide: 0
  }
}
