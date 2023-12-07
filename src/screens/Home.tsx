// import * as React from 'react';
// import {useEffect, useState} from 'react';
// import {Button, StyleSheet, Text, View} from 'react-native';

// import GetLocation, {Location} from 'react-native-get-location';
// import Card from '../components/Card';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Timeline from 'react-native-timeline-flatlist';

// type HomeProps = {
//   setTabTimer: () => void;
// };

// const inRange = (n: number, min: number, max: number) => {
//   return n >= min && n <= max;
// };

// type Keys = 'casaLeo'

// type Value = {
//   p1: [number, number],
//   p2: [number, number],
//   p3: [number, number],
//   p4: [number, number],
// }

// const LocationLimits: Record<Keys, Value> = {
//   casaLeo: {
//     p1: [-21.4312883, -50.0727744],
//     p2: [-21.4313825, -50.0726959],
//     p3: [-21.4314187, -50.0729766],
//     p4: [-21.4315161, -50.0728988],
//     // p1: [-21.43128,-50.07276],
//     // p2: [-21.43138,-50.07269],
//     // p3: [-21.43152,-50.07291],
//     // p4: [-21.43142,-50.07298],
//     // p1: [-21.4313, -50.0728],
//     // p2: [-21.4314, -50.0727],
//     // p3: [-21.4315, -50.0729],
//     // p4: [-21.4314, -50.0730],
//     // p1: [-21.431288609336626, -50.072773013834656],
//     // p2: [-21.431382237485515, -50.07269925308746],
//     // p3: [-21.43150270561537, -50.07291718256782],
//     // p4: [-21.43141968872823, -50.07297954392681],
//   },
// };

// // function inside(vs: number[][], point: [number, number]) {
// //   // ray-casting algorithm based on
// //   // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html

// //   var x = point[0], y = point[1];

// //   var inside = false;
// //   for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
// //       var xi = vs[i][0], yi = vs[i][1];
// //       var xj = vs[j][0], yj = vs[j][1];

// //       var intersect = ((yi > y) != (yj > y))
// //           && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
// //       if (intersect) {inside = !inside;}
// //   }

// //   return inside;
// // }

// const inside = function (polygon: number[][], point: [number, number]) {
//   //A point is in a polygon if a line from the point to infinity crosses the polygon an odd number of times
//   let odd = false;
//   //For each edge (In this case for each point of the polygon and the previous one)
//   for (let i = 0, j = polygon.length - 1; i < polygon.length; i++) {
//       //If a line from the point into infinity crosses this edge
//       if (((polygon[i][1] > point[1]) !== (polygon[j][1] > point[1])) // One point needs to be above, one below our y coordinate
//           // ...and the edge doesn't cross our Y corrdinate before our x coordinate (but between our x coordinate and infinity)
//           && (point[0] < ((polygon[j][0] - polygon[i][0]) * (point[1] - polygon[i][1]) / (polygon[j][1] - polygon[i][1]) + polygon[i][0]))) {
//           // Invert odd
//           odd = !odd;
//       }
//       j = i;

//   }
//   //If the number of crossings was odd, the point is in the polygon
//   return odd;
// };

// const Home = ({setTabTimer}: HomeProps) => {
//   const [locationNow, setLocationNow] = useState<Location | null>(null);
//   const [itsInside, setItsInside] = useState(false);

//   const verifyItsInside = (location: Location | null, local: Keys) => {
//     // return location ? inRange(location.latitude, LocationLimits[local].latMin, LocationLimits[local].latMax) &&
//     //                       inRange(location.longitude, LocationLimits[local].longMin, LocationLimits[local].longMax) : false;
//     if (location) {
//       // location.latitude = -21.43122;
//       // location.longitude = -50.07266;
//       // location.latitude = -21.4314107;
//       // location.longitude = -50.072825;
//       // location.latitude = -21.4314003;
//       // location.longitude = -50.0727978;
//     }
//     const polygon = [[LocationLimits[local].p1[0], LocationLimits[local].p1[1]],
//                       [LocationLimits[local].p2[0], LocationLimits[local].p2[1]],
//                       [LocationLimits[local].p3[0], LocationLimits[local].p3[1]],
//                       [LocationLimits[local].p4[0], LocationLimits[local].p4[1]]];
//                       // console.log(location?.latitude);
//                       // console.log(location?.longitude);
//     console.log(inside(polygon, [location?.latitude, location?.longitude]));
//     return location ? !!inside(polygon, [location?.latitude, location?.longitude]) : false;
//   };

//   const getLocation = () => {
//     return GetLocation.getCurrentPosition({
//       enableHighAccuracy: true,
//       timeout: 60000,
//     })
//       .then(location => {
//         return location;
//       })
//       .catch(error => {
//         return null;
//       });
//   };


//   const storeData = async (value: Date) => {
//     try {
//       const jsonValue = JSON.stringify(value);
//       await AsyncStorage.setItem('datingDate', jsonValue);
//     } catch (e) {
//       // saving error
//     }
//   };

//   // const locals = [
//   //   {
//   //     time: '09:00',
//   //     title: 'Archery Training',
//   //     description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
//   //     lineColor:'#009688',
//   //     icon: require('../assets/background.png'),
//   //     imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg',
//   //   },
//   // ];
//   const locals = [
//     {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
//     {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
//     {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
//     {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
//     {time: '16:30', title: 'Event 5', description: 'Event 5 Description'},
//   ];

//   const renderDetail = (rowData, sectionID, rowID) => {
//     let title = <Text style={[styles.title]}>{rowData.title}</Text>;
//     var desc = null;
//     if (rowData.description && rowData.imageUrl)
//       {desc = (
//         <View style={styles.descriptionContainer}>
//           <Image source={{uri: rowData.imageUrl}} style={styles.image}/>
//           <Text style={[styles.textDescription]}>{rowData.description}</Text>
//         </View>
//       );}

//     return (
//       <View style={{flex:1}}>
//         {title}
//         {desc}
//       </View>
//     );
//   };

//   return (
//     // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     //   {/* <Text style={{color: '#000', fontSize: 20 }}>Altitude: {locationNow?.altitude}</Text>
//     //   <Text style={{color: '#000', fontSize: 20 }}>Latitude: {locationNow?.latitude}</Text>
//     //   <Text style={{color: '#000', fontSize: 20 }}>Longitude: {locationNow?.longitude}</Text>
//     //   <Text style={{color: '#000', fontSize: 20 }}>Accuracy: {locationNow?.accuracy}</Text>
//     //   <Text style={{color: '#000', fontSize: 20 }}>Bearing: {locationNow?.bearing}</Text>
//     //   <Text style={{color: '#000', fontSize: 20 }}>Course: {locationNow?.course}</Text>
//     //   <Text style={{color: '#000', fontSize: 20 }}>Provider: {locationNow?.provider}</Text>
//     //   <Text style={{color: '#000', fontSize: 20 }}>Speed: {locationNow?.speed}</Text>
//     //   <Text style={{color: '#000', fontSize: 20 }}>Time: {locationNow?.time}</Text>
//     //   <Text style={{color: '#000', fontSize: 20 }}>VerticalAccuracy: {locationNow?.verticalAccuracy}</Text>
//     //   <Button title="Atualizar" color={'tomato'} onPress={async () => {

//     //     const location = await getLocation();
//     //     setLocationNow(location);
//     //     verifyItsInside(location, 'casaLeo') ? setItsInside(true) : setItsInside(false);
//     //     // setTabTimer();
//     //     // storeData(new Date('2023-11-27T00:28:51.940Z'));
//     //   }} /> */}
//     //   {/* <Card localName="Auto Escola" localNumber={1} />
//     //   <Card localNumber={2} /> */}
//     //   {/* {itsInside ? (<Text style={{color: '#00ff6a', fontSize: 30, marginTop: 50 }}>DENTRO</Text>) : (<Text style={{color: '#c41313', fontSize: 30, marginTop: 50 }}>FORA</Text>)} */}
//     // </View>
//     <View style={styles.container}>
//     <Timeline
//       style={styles.list}
//       data={locals}
//       separator={true}
//       circleSize={20}
//       circleColor="rgb(45,156,219)"
//       lineColor="rgb(45,156,219)"
//       timeContainerStyle={{minWidth:52, marginTop: -5}}
//       timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13, overflow: 'hidden'}}
//       descriptionStyle={{color:'gray'}}
//       options={{
//         style:{paddingTop:5},
//       }}
//     />
//   </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
// 		paddingTop:80,
//     backgroundColor:'white',
//   },
//   list: {
//     flex: 1,
//     marginTop:30,
//   },
// });

import React, { Component, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatListProps,
  Button,
  ActivityIndicator,
} from 'react-native';
import Timeline, { Data } from 'react-native-timeline-flatlist';
import { getData } from '../Navigator';


const autoEscolaUrl = require('../assets/autoEscola.jpg');
const AUTO_ESCOLA_IMAGE = Image.resolveAssetSource(autoEscolaUrl).uri;
const dbbUrl = require('../assets/dbb.jpg');
const DBB_IMAGE = Image.resolveAssetSource(dbbUrl).uri;
const pracaUrl = require('../assets/praca.png');
const PRACA_IMAGE = Image.resolveAssetSource(pracaUrl).uri;
const jeronimoUrl = require('../assets/jeronimo.jpg');
const JERONIMO_IMAGE = Image.resolveAssetSource(jeronimoUrl).uri;
const apartamentoUrl = require('../assets/apartamento.png');
const APARTAMENTO_IMAGE = Image.resolveAssetSource(apartamentoUrl).uri;

const locked = require('../assets/background3.png');
const LOCKED_IMAGE = Image.resolveAssetSource(locked).uri;

import Card from '../components/Card';

type RowData = {
  description: string
  imageUrl: string
}

const selectorLocal = (local: string) => {
  switch (local) {
    case 'Autoescola':
      return 'autoEscola';
    case 'DBB':
      return 'dbb';
    case 'Praça':
      return 'praca';
    case 'Jeronimo':
      return 'jeronimo';
    case 'Apartamento':
      return 'apartamento';
    default:
      return 'autoEscola';
  }
};

type HomeProps = {
  setOtherTabs: () => void
}


const Home = ({ setOtherTabs }: HomeProps) => {
  // const [selected, setSelected] = useState();
  const [localsVerified, setLocalVerified] = useState({
    autoEscola: false,
    dbb: false,
    praca: false,
    jeronimo: false,
    apartamento: false,
  });

  const [indexLocalToVerify, setIndexLocalToVerify] = useState(0);
  const [loading, setLoading] = useState(true);

  const locals = [
    {
      time: '1º Encontro',
      title: localsVerified.autoEscola ? 'Autoescola' : 'Local 1',
      description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
      // icon: <Icon
      //   name="location"
      //   size={20}
      //   color={localsVerified.autoEscola ? 'tomato' : '#9b9b9b'}
      // />,
      circleColor: localsVerified.autoEscola ? 'tomato' : '#9b9b9b',
      lineColor: localsVerified.autoEscola ? 'tomato' : '#9b9b9b',
      imageUrl: localsVerified.autoEscola ? AUTO_ESCOLA_IMAGE : LOCKED_IMAGE,
      isVerify: indexLocalToVerify === 0,
    },
    {
      time: '1º Encontro',
      title: localsVerified.dbb ? 'DBB' : 'Local 2',
      description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
      lineColor: localsVerified.dbb ? 'tomato' : '#9b9b9b',
      circleColor: localsVerified.dbb ? 'tomato' : '#9b9b9b',
      imageUrl: localsVerified.dbb ? DBB_IMAGE : LOCKED_IMAGE,
      isVerify: indexLocalToVerify === 1,
    },
    {
      time: '1º Encontro',
      title: localsVerified.praca ? 'Praça' : 'Local 3',
      description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
      circleColor: localsVerified.praca ? 'tomato' : '#9b9b9b',
      lineColor: localsVerified.praca ? 'tomato' : '#9b9b9b',
      imageUrl: localsVerified.praca ? PRACA_IMAGE : LOCKED_IMAGE,
      isVerify: indexLocalToVerify === 2,
    },
    {
      time: '2º Encontro',
      title: localsVerified.jeronimo ? 'Jeronimo' : 'Local 4',
      description: 'Team sport played between two teams of eleven players with a spherical ball. ',
      circleColor: localsVerified.jeronimo ? 'tomato' : '#9b9b9b',
      lineColor: localsVerified.jeronimo ? 'tomato' : '#9b9b9b',
      imageUrl: localsVerified.jeronimo ? JERONIMO_IMAGE : LOCKED_IMAGE,
      isVerify: indexLocalToVerify === 3,
    },
    {
      time: '3º Encontro',
      title: localsVerified.apartamento ? 'Apartamento' : 'Local 5',
      description: 'Look out for the Best Gym & Fitness Centers around me :)',
      circleColor: localsVerified.apartamento ? 'tomato' : '#9b9b9b',
      lineColor: localsVerified.apartamento ? 'tomato' : '#9b9b9b',
      imageUrl: localsVerified.apartamento ? APARTAMENTO_IMAGE : LOCKED_IMAGE,
      isVerify: indexLocalToVerify === 4,
    },
  ];

  const getIndexLocalToVerify = (localStatus: Boolean[]) => {
    return localStatus.findIndex((element) => element === false);
  };

  useEffect(() => {

    const asyncFunction = async () => {
      const localAutoEscola = await getData('autoEscola');
      const localDbb = await getData('dbb');
      const localPraca = await getData('praca');
      const localjeronimo = await getData('jeronimo');
      const localApartamento = await getData('apartamento');
      setLocalVerified({
        autoEscola: localAutoEscola === 'true',
        dbb: localDbb === 'true',
        praca: localPraca === 'true',
        jeronimo: localjeronimo === 'true',
        apartamento: localApartamento === 'true',
      });
      setIndexLocalToVerify(getIndexLocalToVerify([localAutoEscola === 'true', localDbb === 'true', localPraca === 'true', localjeronimo === 'true', localApartamento === 'true']));
      setLoading(false);
    };
    asyncFunction();
  }, []);


  type Local = {
    time: string
    description: string
    circleColor: string
    title: string
    lineColor: string
    imageUrl: string
    isVerify: boolean
  }

  const onEventPress = async (data: Local) => {
    if (!data.isVerify) {
      return;
    }
    let title = data.title;
    switch (data.title) {
      case 'Local 1':
        title = 'Autoescola';
        break;
      case 'Local 2':
        title = 'DBB';
        break;
      case 'Local 3':
        title = 'Praça';
        break;
      case 'Local 4':
        title = 'Jeronimo';
        break;
      case 'Local 5':
        title = 'Apartamento';
        break;
      default:
        break;
    }
    await attLocal(selectorLocal(title), !localsVerified[selectorLocal(title)]);
    // setSelected(data);
  };

  // const renderSelected = () => {
  //     if (selected)
  //       {return <Text style={{marginTop:10}}>Selected event: {selected.title} at {selected.time}</Text>;}
  // };

  const storeData = async (field: string, value: Date | boolean) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(field, jsonValue);
    } catch (e) {
      // saving error
    }
  };



  const attLocal = async (field: string, value: boolean) => {
    // Fazer a insercao do valor na memoria
    await storeData(field, value);

    // Se for o ultimo, fazer a liberacao das abas
    if (field === 'apartamento'){
      storeData('datingDate', new Date());
      setOtherTabs();
    }

    const obj = { ...localsVerified, [field]: value };
    setIndexLocalToVerify(getIndexLocalToVerify(Object.values(obj)));
    setLocalVerified((s) => ({ ...s, [field]: value }));
  };



  const renderDetail = (rowData: Local, index: number) => {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>;
    var desc = null;
    if (rowData.description && rowData.imageUrl) {
      desc = (
        <View style={styles.descriptionContainer}>
          <Image source={{ uri: rowData.imageUrl }} style={styles.image} />
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      );
    }

    return (
      <Card localName={rowData.title} uri={rowData.imageUrl} toVerified={rowData.isVerify} />
    );
  };

  return (
    <View style={styles.container}>
      {/* {renderSelected()} */}
      {/* <Button title="Atualizar" color={'tomato'} onPress={async () => {
        // storeData(new Date('2023-11-27T00:28:51.940Z'));
        const jsonValue = JSON.stringify(true);
        await AsyncStorage.setItem('autoEscola', jsonValue);
        // setOtherTabs();
      }} /> */}
      {loading ?
        (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" style={{ transform: [{ scaleX: 3 }, { scaleY: 3 }] }} color="tomato" />
          </View>
        ) :
        (<Timeline
          style={styles.list}
          data={locals}
          circleSize={20}
          timeStyle={{ textAlign: 'center', backgroundColor: 'tomato', color: 'white', padding: 5, borderRadius: 13 }}
          // showTime={false} // tirando o time
          descriptionStyle={{ color: 'gray' }}
          options={{
            style: { paddingTop: 5 },
          }}
          // innerCircle={'icon'}
          onEventPress={onEventPress}
          renderDetail={renderDetail}
          innerCircle={'dot'}
        />)
      }

    </View>
  );

};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    paddingLeft: 20,
    paddingVertical: 5,
    // paddingTop:65,
    // backgroundColor:'white',
  },
  containerLocal: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 14,
    boxShadow: 1,
    marginBottom: 10,
  },
  list: {
    flex: 1,
    // marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray',
  },
});
