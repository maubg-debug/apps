const trips = [
  {
    id: 1,
    date: 'Ayer',
    score: 7.2,
    distance: '45.6 km',
    from: 'monteclaro, Calle de los pinos, CA',
    to: 'España, Monteclaro, ES',
  },
  {
    id: 2,
    date: 'Oct 12',
    score: 8.3,
    distance: '837.9 km',
    from: 'Salamanca, Banko de salamanca, SA',
    to: 'Venezuela, Los Angeles, ES',
  },
];

const drivingData = [
  {
    id: 1,
    status: 'Mal',
    action: 'rotura',
    icon: require('../assets/images/Icon/BreakingBad.png'),
  },
  {
    id: 2,
    status: 'Justo',
    action: 'exceso de velocidad',
    icon: require('../assets/images/Icon/SpeedingFair.png'),
  },
  {
    id: 3,
    status: 'Bien',
    action: 'parando',
    icon: require('../assets/images/Icon/BreakingGood.png'),
  },
];

const location = {
  latitude: 40.73978092263567,
  longitude: -73.87333547273988,
  latitudeDelta: 0.06,
  longitudeDelta: 0.06,
}

export { trips, drivingData, location };
