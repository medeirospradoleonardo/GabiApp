import React, { Component, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatListProps,
  ActivityIndicator,
} from 'react-native';
import Timeline, { Data } from 'react-native-timeline-flatlist';
import { getData } from '../Navigator';

import ButtonMinimal from '../components/ButtonMinimal';


import Modal from 'react-native-modal';

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

const locked = require('../assets/lock.png');
const LOCKED_IMAGE = Image.resolveAssetSource(locked).uri;

import Card from '../components/Card';
import { ALERT_TYPE, AlertNotificationRoot, Dialog, Toast } from 'react-native-alert-notification';

type RowData = {
  description: string
  imageUrl: string
}

const selectorLocal = (local: string) => {
  switch (local) {
    case 'Autoescola':
      return 'autoEscola';
    case 'Local 1':
      return 'autoEscola';
    case 'DBB':
      return 'dbb';
    case 'Local 2':
      return 'dbb';
    case 'Praça':
      return 'praca';
    case 'Local 3':
      return 'praca';
    case 'Jeronimo':
      return 'jeronimo';
    case 'Local 4':
      return 'jeronimo';
    case 'Apartamento':
      return 'apartamento';
    case 'Local 5':
      return 'apartamento';
    default:
      return 'autoEscola';
  }
};


type HomeProps = {
  setOtherTabs: () => void
}

export const storeData = async (field: string, value: Date | boolean) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(field, jsonValue);
  } catch (e) {
    // saving error
  }
};


const Home = ({ setOtherTabs }: HomeProps) => {
  // const [selected, setSelected] = useState();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalTip, setModalTip] = useState('🙋‍♀️🙋‍♂️Lugar em que a gente se viu pessoalmente pela primeira vez.');
  const [localsVerified, setLocalVerified] = useState({
    autoEscola: true,
    dbb: true,
    praca: true,
    jeronimo: true,
    apartamento: true,
  });

  const [indexLocalToVerify, setIndexLocalToVerify] = useState(-1);
  const [loading, setLoading] = useState(true);

  const locals = [
    {
      time: '1º Encontro',
      title: localsVerified.autoEscola ? 'Autoescola' : 'Local 1',
      description: '🙋‍♀️🙋‍♂️Lugar em que a gente se viu pessoalmente pela primeira vez.',
      circleColor: localsVerified.autoEscola ? 'tomato' : '#9b9b9b',
      lineColor: localsVerified.autoEscola ? 'tomato' : '#9b9b9b',
      imageUrl: localsVerified.autoEscola ? AUTO_ESCOLA_IMAGE : LOCKED_IMAGE,
      isVerify: indexLocalToVerify === 0,
    },
    {
      time: '1º Encontro',
      title: localsVerified.dbb ? 'DBB' : 'Local 2',
      description: '👫 Lugar em que a gente teve nossa primeira conversa cara a cara.',
      lineColor: localsVerified.dbb ? 'tomato' : '#9b9b9b',
      circleColor: localsVerified.dbb ? 'tomato' : '#9b9b9b',
      imageUrl: localsVerified.dbb ? DBB_IMAGE : LOCKED_IMAGE,
      isVerify: indexLocalToVerify === 1,
    },
    {
      time: '1º Encontro',
      title: localsVerified.praca ? 'Praça' : 'Local 3',
      description: '👩‍❤️‍💋‍👨 Lugar em que a gente teve nosso primeiro beijo.',
      circleColor: localsVerified.praca ? 'tomato' : '#9b9b9b',
      lineColor: localsVerified.praca ? 'tomato' : '#9b9b9b',
      imageUrl: localsVerified.praca ? PRACA_IMAGE : LOCKED_IMAGE,
      isVerify: indexLocalToVerify === 2,
    },
    {
      time: '2º Encontro',
      title: localsVerified.jeronimo ? 'Jeronimo' : 'Local 4',
      description: '🤦‍♂️Lugar onde a gente teve uma conversa séria.',
      circleColor: localsVerified.jeronimo ? 'tomato' : '#9b9b9b',
      lineColor: localsVerified.jeronimo ? 'tomato' : '#9b9b9b',
      imageUrl: localsVerified.jeronimo ? JERONIMO_IMAGE : LOCKED_IMAGE,
      isVerify: indexLocalToVerify === 3,
    },
    {
      time: '3º Encontro',
      title: localsVerified.apartamento ? 'Apartamento' : 'Local 5',
      description: '😁 Esse você já sabe.',
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
      // const localAutoEscola = await getData('autoEscola');
      // const localDbb = await getData('dbb');
      // const localPraca = await getData('praca');
      // const localjeronimo = await getData('jeronimo');
      // const localApartamento = await getData('apartamento');
      // setLocalVerified({
      //   autoEscola: localAutoEscola === 'true',
      //   dbb: localDbb === 'true',
      //   praca: localPraca === 'true',
      //   jeronimo: localjeronimo === 'true',
      //   apartamento: localApartamento === 'true',
      // });
      // setIndexLocalToVerify(getIndexLocalToVerify([localAutoEscola === 'true', localDbb === 'true', localPraca === 'true', localjeronimo === 'true', localApartamento === 'true']));
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

  const attLocal = async (field: string, value: boolean) => {
    // Fazer a insercao do valor na memoria
    await storeData(field, value);
    // Se for o ultimo, fazer a liberacao das abas
    if (field === 'apartamento') {
      await storeData('datingDate', new Date());
      setOtherTabs();
    }

    const obj = { ...localsVerified, [field]: value };
    setIndexLocalToVerify(getIndexLocalToVerify(Object.values(obj)));
    setLocalVerified((s) => ({ ...s, [field]: value }));
  };

  const onEventPress = async (data: any) => {
    // if (!data.isVerify) {
    //   return;
    // }

    setModalTip(data.description);
    setModalIsVisible(true);
    //  Chama o processo de atualizar
    // await attLocal(selectorLocal(title), !localsVerified[selectorLocal(title)]);
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
    <>
      <AlertNotificationRoot colors={[{
        label: '#000000',
        card: '#ffffff',
        overlay: '#21ee21',
        success: '#21ee21',
        danger: '#e40e0e',
        warning: '#d9ff00',
      },
      {
        label: '#000000',
        card: '#ffffff',
        overlay: '#21ee21',
        success: '#21ee21',
        danger: '#e40e0e',
        warning: '#d9ff00',
      }]} >
        <Modal isVisible={modalIsVisible} onBackdropPress={() => setModalIsVisible(false)}>
          <View style={styles.modal}>
            <View style={styles.tipContainer}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>💡 Dica 💡</Text>
              <View style={styles.tip}>
                {/* <Text style={{ fontWeight: 'bold' }}>{getIndexLocalToVerify(Object.values(localsVerified)) >= 0 && locals[getIndexLocalToVerify(Object.values(localsVerified))].description}</Text> */}
                <Text style={{ fontWeight: 'bold' }}>{modalTip}</Text>
              </View>
            </View>
            <View style={styles.modalRight}>
              <ButtonMinimal title="Cancelar" onPress={() => {
                setModalIsVisible(false);
              }} />
              {/* <Button title="Cancelar" onPress={() => setModalIsVisible(false)}/> */}
              <View style={{ width: 135, marginLeft: 5 }}>
                <Button disabled color="tomato" title="Liberar local" onPress={async () => {

                  // Verifica

                  // Alert de rejeicao
                  // Dialog.show({
                  //   type: ALERT_TYPE.DANGER,
                  //   title: 'Localização incorreta!',
                  // });

                  // Atualiza
                  await attLocal(selectorLocal(locals[getIndexLocalToVerify(Object.values(localsVerified))].title), true);
                  setModalIsVisible(false);
                  Dialog.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Local liberado!',
                  });
                }} />
              </View>
            </View>
          </View>
        </Modal>
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
              listViewStyle={{ paddingVertical: 15 }}
              // innerCircle={'icon'}
              onEventPress={(event) => onEventPress(event)}
              renderDetail={renderDetail}
              innerCircle={'dot'}
            />)
          }
        </View>
      </AlertNotificationRoot>
    </>
  );

};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
  },
  containerLocal: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 14,
    boxShadow: 1,
    marginBottom: 10,
    paddingVertical: 5,
  },
  list: {
    flex: 1,

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
  modal: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFF',
    // height: '60%',

    borderRadius: 14,
  },
  modalRight: {
    // marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    // marginTop: 360,
  },
  tipContainer: {
    display: 'flex',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  tip: {
    // width: '90%',
    borderColor: '#000',
    // borderBottomWidth: 2,
    // borderWidth: 2,
    paddingHorizontal: 2,
    marginTop: 20,
    marginBottom: 30,
  },
});
