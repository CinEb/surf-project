export default {
  surfSection: {
    title: 'surf',
    currentLocation: {
      text: 'current location',
      title: 'california',
      titleAfterLine: 'usa'
    },
    // 18.11.2020 change from ../assets... to assets...
    map: require('@/assets/img/surf-section/Map.svg'),
    poi: require('@/assets/img/surf-section/POI-surf.svg'),
    wind: require('@/assets/img/surf-section/wind.svg'),
    water: require('@/assets/img/surf-section/water.svg'),
    wave: require('@/assets/img/surf-section/wave.svg'),

    surfSlider: {
      currentSlide: 0,
      countSlides: 0
    }

  },
  surfBeaches: [
    {
      surfImage: require('@/assets/img/surf-section/surfers/1.jpg'),
      title: 'Rommoldo Beach',
      position: {
        bottom: '45%',
        left: '2%'
      },
      location: 'Hawaii USA',
      buttonText: 'View-surf',
      wave: '8-12',
      water: '+2.5',
      wind: '5 SE',
      travel: {
        beachName: '',
        beachDestination: '',
        beachImage: require('@/assets/img/travel-section/surfbeach1.jpg'),
        airplaneImage: require('@/assets/img/travel-section/virgin-airline.svg'),
        airline: 'Virgin USA',
        distance: '7,065 Miles',
        travelTime: '23 Hours 5 Minutes',
        pricing: '1976'
      },
      resorts: {
        resortImage: require('@/assets/img/sleep-section/sleep1.jpg'),
        resortName: 'Auberge',
        resortStars: 5,
        resortRating: '',
        resortMaxNights: 5,
        resortMaxGuests: 8,
        resortPricePerNight: 349,
        nights: 0,
        guests: 0
      }
    },
    {
      surfImage: require('@/assets/img/surf-section/surfers/2.jpg'),
      title: 'Malibu Beach',
      position: {
        bottom: '51%',
        left: '13%'
      },
      location: 'California USA',
      buttonText: 'View-surf',
      wave: '9-13',
      water: '+2.3',
      wind: '3 NW',
      travel: {
        beachName: '',
        beachDestination: '',
        beachImage: require('@/assets/img/travel-section/surfbeach2.jpg'),
        airplaneImage: '',
        airline: 'Virgin USA',
        distance: '4,525 Miles',
        travelTime: '18 Hours 5 Minutes',
        pricing: '976'
      },
      resorts: {
        resortImage: require('@/assets/img/sleep-section/sleep2.jpg'),
        resortName: 'SamuelVillage',
        resortStars: 4,
        resortRating: '',
        resortMaxNights: 15,
        resortMaxGuests: 15,
        resortPricePerNight: 285,
        nights: 0,
        guests: 0
      }
    },
    {
      surfImage: require('@/assets/img/surf-section/surfers/3.jpg'),
      title: 'Cloud Nine',
      position: {
        bottom: '45%',
        left: '28%'
      },
      location: 'Caribes',
      buttonText: 'View-surf',
      wave: '9-15',
      water: '+3.3',
      wind: '4 NE',
      travel: {
        beachName: '',
        beachDestination: '',
        beachImage: require('@/assets/img/travel-section/surfbeach3.jpg'),
        airplaneImage: require('@/assets/img/travel-section/virgin-airline.svg'),
        airline: 'Caribes Airline',
        distance: '1,565 Miles',
        travelTime: '9 Hours 5 Minutes',
        pricing: '1176'
      },
      resorts: {
        resortImage: require('@/assets/img/sleep-section/sleep3.jpg'),
        resortName: 'Rediskenton',
        resortStars: 5,
        resortRating: '',
        resortMaxNights: 5,
        resortMaxGuests: 8,
        resortPricePerNight: 249,
        nights: 0,
        guests: 0
      }
    },
    {
      surfImage: require('@/assets/img/surf-section/surfers/4.jpg'),
      title: 'Bene Notas',
      position: {
        bottom: '20%',
        left: '35%'
      },
      location: 'SanMartin Brazil',
      buttonText: 'View-surf',
      wave: '7-9',
      water: '+4.3',
      wind: '1 SE',
      travel: {
        beachName: '',
        beachDestination: '',
        beachImage: require('@/assets/img/travel-section/surfbeach4.jpg'),
        airplaneImage: '',
        airline: 'Brazil Airline',
        distance: '1,565 Miles',
        travelTime: '5 Hours 15 Minutes',
        pricing: '576'
      },
      resorts: {
        resortImage: require('@/assets/img/sleep-section/sleep4.jpg'),
        resortName: 'Glatumala',
        resortStars: 5,
        resortRating: '',
        resortMaxNights: 4,
        resortMaxGuests: 10,
        resortPricePerNight: 149,
        nights: 0,
        guests: 0
      }
    },
    {
      surfImage: require('@/assets/img/surf-section/surfers/1.jpg'),
      title: 'Boun Jour',
      position: {
        bottom: '63%',
        left: '44%'
      },
      location: 'East France',
      buttonText: 'View-surf',
      wave: '4-13',
      water: '+5.3',
      wind: '2 SW',
      travel: {
        beachName: '',
        beachDestination: '',
        beachImage: require('@/assets/img/travel-section/surfbeach5.jpg'),
        airplaneImage: require('@/assets/img/travel-section/virgin-airline.svg'),
        airline: 'Virgin France',
        distance: '2,025 Miles',
        travelTime: '15 Hours 5 Minutes',
        pricing: '776'
      },
      resorts: {
        resortImage: require('@/assets/img/sleep-section/sleep5.jpg'),
        resortName: 'Slomdtziuni',
        resortStars: 3,
        resortRating: '',
        resortMaxNights: 9,
        resortMaxGuests: 4,
        resortPricePerNight: 220,
        nights: 0,
        guests: 0
      }
    },
    {
      surfImage: require('@/assets/img/surf-section/surfers/2.jpg'),
      title: 'Sample Beach',
      position: {
        bottom: '13%',
        left: '53%'
      },
      location: 'Soutg African Republic',
      buttonText: 'View-surf',
      wave: '9-10',
      water: '+1.3',
      wind: '2 SE',
      travel: {
        beachName: '',
        beachDestination: '',
        beachImage: require('@/assets/img/travel-section/surfbeach6.jpg'),
        airplaneImage: '',
        airline: 'African Airline',
        distance: '2,065 Miles',
        travelTime: '18 Hours 45 Minutes',
        pricing: '1576'
      },
      resorts: {
        resortImage: require('@/assets/img/sleep-section/sleep6.jpg'),
        resortName: 'Austrington',
        resortStars: 5,
        resortRating: '',
        resortMaxNights: 5,
        resortMaxGuests: 8,
        resortPricePerNight: 249,
        nights: 0,
        guests: 0
      }
    },
    {
      surfImage: require('@/assets/img/surf-section/surfers/3.jpg'),
      title: 'Budhai Shivsu',
      position: {
        bottom: '37%',
        left: '65%'
      },
      location: 'South India',
      buttonText: 'View-surf',
      wave: '4-15',
      water: '+1.3',
      wind: '2 NW',
      travel: {
        beachName: '',
        beachDestination: '',
        beachImage: require('@/assets/img/travel-section/surfbeach7.jpg'),
        airplaneImage: require('@/assets/img/travel-section/virgin-airline.svg'),
        airline: 'Budhai Airline',
        distance: '5,065 Miles',
        travelTime: '18 Hours 5 Minutes',
        pricing: '2976'
      },
      resorts: {
        resortImage: require('@/assets/img/sleep-section/sleep7.jpg'),
        resortName: 'Davidoff',
        resortStars: 4,
        resortRating: '',
        resortMaxNights: 8,
        resortMaxGuests: 10,
        resortPricePerNight: 327,
        nights: 0,
        guests: 0
      }
    },
    {
      surfImage: require('@/assets/img/surf-section/surfers/4.jpg'),
      title: 'Chinsun Thai',
      position: {
        bottom: '50%',
        left: '82%'
      },
      location: 'West China',
      buttonText: 'View-surf',
      wave: '4-7',
      water: '+3.3',
      wind: '4 SE',
      travel: {
        beachName: '',
        beachDestination: '',
        beachImage: require('@/assets/img/travel-section/surfbeach8.jpg'),
        airplaneImage: '',
        airline: 'Virgin China',
        distance: '3,065 Miles',
        travelTime: '5 Hours 25 Minutes',
        pricing: '1976'
      },
      resorts: {
        resortImage: require('@/assets/img/sleep-section/sleep8.jpg'),
        resortName: 'Sarmisegetuza',
        resortStars: 5,
        resortRating: '',
        resortMaxNights: 5,
        resortMaxGuests: 8,
        resortPricePerNight: 249,
        nights: 0,
        guests: 0
      }
    },
    {
      surfImage: require('@/assets/img/surf-section/surfers/1.jpg'),
      title: 'Surfer Beach',
      position: {
        bottom: '19%',
        left: '88%'
      },
      location: 'QueenSland Australia',
      buttonText: 'View-surf',
      wave: '9-13',
      water: '+2.3',
      wind: '2 NE',
      travel: {
        beachName: '',
        beachDestination: '',
        beachImage: require('@/assets/img/travel-section/surfbeach9.jpg'),
        airplaneImage: require('@/assets/img/travel-section/virgin-airline.svg'),
        airline: 'Virgin Australia',
        distance: '6,665 Miles',
        travelTime: '21 Hours 5 Minutes',
        pricing: '1265'
      },
      resorts: {
        resortImage: require('@/assets/img/sleep-section/sleep9.jpg'),
        resortName: 'Romeno',
        resortStars: 4,
        resortRating: '',
        resortMaxNights: 30,
        resortMaxGuests: 20,
        resortPricePerNight: 282,
        nights: 0,
        guests: 0
      }
    }
  ]
}
