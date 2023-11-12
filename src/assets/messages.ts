const background = require('../assets/background.png');
import {Image} from 'react-native';

const BACKGROUND_IMAGE = Image.resolveAssetSource(background).uri;

const userGabi = {
    _id: 2,
    name: 'Gabriela',
    avatar: BACKGROUND_IMAGE,
};

const userLeonardo = {
    _id: 1,
    name: 'Leonardo',
    avatar: BACKGROUND_IMAGE,
};

const Messages = [
    {
        _id: 1,
        text: 'Oii',
        createdAt: new Date('2023-08-27T12:54:00Z'),
        user: userLeonardo,
    },
    {
        _id: 2,
        text: 'Oii',
        createdAt: new Date('2023-08-27T13:50:00Z'),
        user: userGabi,
    },
    {
        _id: 1,
        text: 'Tudo bemm?',
        createdAt: new Date('2023-08-27T15:44:00Z'),
        user: userLeonardo,
    },
    {
        _id: 2,
        text: 'comigo sim, e com você?',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userGabi,
    },
    {
        _id: 1,
        text: 'Tambémmm',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userLeonardo,
    },
    {
        _id: 1,
        text: 'Tô na correria, mas tô bemm',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userLeonardo,
    },
    {
        _id: 1,
        text: 'Ce mora onde?',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userLeonardo,
    },
    {
        _id: 2,
        text: 'poxa tá em correria no domingo, imagina na semana kk',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userGabi,
    },
    {
        _id: 2,
        text: 'Moro em ara Araçatuba',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userGabi,
    },
    {
        _id: 2,
        text: 'E você?',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userGabi,
    },
    {
        _id: 1,
        text: 'Kkkk isso se chama tcc',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userLeonardo,
    },
    {
        _id: 1,
        text: 'E estágio',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userLeonardo,
    },
    {
        _id: 1,
        text: 'Nossa, perto daqii',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userLeonardo,
    },
    {
        _id: 1,
        text: 'Sou de Penápolis, sabe?',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userLeonardo,
    },
    {
        _id: 2,
        text: 'ah kk, eu tô no quarto ano, então jaja vou saber o que é isso',
        createdAt: new Date('2023-08-27T16:54:00Z'),
        user: userGabi,
    },
    {
        _id: 2,
        text: 'Você cursa o que?',
        createdAt: new Date('2023-08-27T16:54:00Z'),
        user: userGabi,
    },
    {
        _id: 2,
        text: 'Ah não é tão pertinho',
        createdAt: new Date('2023-08-27T16:54:00Z'),
        user: userGabi,
    },
    {
        _id: 1,
        text: 'Cê cursa o que?',
        createdAt: new Date('2023-08-27T17:38:00Z'),
        user: userLeonardo,
    },
    {
        _id: 1,
        text: 'São 5 anos?',
        createdAt: new Date('2023-08-27T17:38:00Z'),
        user: userLeonardo,
    },
    {
        _id: 1,
        text: 'Eu curso ciência da computação',
        createdAt: new Date('2023-08-27T17:38:00Z'),
        user: userLeonardo,
    },
    {
        _id: 1,
        text: '40km',
        createdAt: new Date('2023-08-27T17:38:00Z'),
        user: userLeonardo,
    },
    {
        _id: 1,
        text: 'Da pra ir aí um fim de seamanaaa',
        createdAt: new Date('2023-08-27T17:38:00Z'),
        user: userLeonardo,
    },
    {
        _id: 2,
        text: 'Eu curso arquitetura, são 5 anos',
        createdAt: new Date('2023-08-27T19:07:00Z'),
        user: userGabi,
    },
    {
        _id: 2,
        text: 'Ah legal',
        createdAt: new Date('2023-08-27T19:07:00Z'),
        user: userGabi,
    },
    {
        _id: 2,
        text: 'Verdade, dá kk',
        createdAt: new Date('2023-08-27T19:07:00Z'),
        user: userGabi,
    },
];

export default Messages;
