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
        _id: 3,
        text: 'Tudo bemm?',
        createdAt: new Date('2023-08-27T15:44:00Z'),
        user: userLeonardo,
    },
    {
        _id: 4,
        text: 'comigo sim, e com você?',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userGabi,
    },
    {
        _id: 5,
        text: 'Tambémmm',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userLeonardo,
    },
    {
        _id: 6,
        text: 'Tô na correria, mas tô bemm',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userLeonardo,
    },
    {
        _id: 7,
        text: 'Ce mora onde?',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userLeonardo,
    },
    {
        _id: 8,
        text: 'poxa tá em correria no domingo, imagina na semana kk',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userGabi,
    },
    {
        _id: 9,
        text: 'Moro em ara Araçatuba',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userGabi,
    },
    {
        _id: 10,
        text: 'E você?',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userGabi,
    },
    {
        _id: 11,
        text: 'Kkkk isso se chama tcc',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userLeonardo,
    },
    {
        _id: 12,
        text: 'E estágio',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userLeonardo,
    },
    {
        _id: 13,
        text: 'Nossa, perto daqii',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userLeonardo,
    },
    {
        _id: 14,
        text: 'Sou de Penápolis, sabe?',
        createdAt: new Date('2023-08-27T16:22:00Z'),
        user: userLeonardo,
    },
    {
        _id: 15,
        text: 'ah kk, eu tô no quarto ano, então jaja vou saber o que é isso',
        createdAt: new Date('2023-08-27T16:54:00Z'),
        user: userGabi,
    },
    {
        _id: 16,
        text: 'Você cursa o que?',
        createdAt: new Date('2023-08-27T16:54:00Z'),
        user: userGabi,
    },
    {
        _id: 17,
        text: 'Ah não é tão pertinho',
        createdAt: new Date('2023-08-27T16:54:00Z'),
        user: userGabi,
    },
    {
        _id: 18,
        text: 'Cê cursa o que?',
        createdAt: new Date('2023-08-27T17:38:00Z'),
        user: userLeonardo,
    },
    {
        _id: 19,
        text: 'São 5 anos?',
        createdAt: new Date('2023-08-27T17:38:00Z'),
        user: userLeonardo,
    },
    {
        _id: 20,
        text: 'Eu curso ciência da computação',
        createdAt: new Date('2023-08-27T17:38:00Z'),
        user: userLeonardo,
    },
    {
        _id: 21,
        text: '40km',
        createdAt: new Date('2023-08-27T17:38:00Z'),
        user: userLeonardo,
    },
    {
        _id: 22,
        text: 'Da pra ir aí um fim de semanaaa',
        createdAt: new Date('2023-08-27T17:38:00Z'),
        user: userLeonardo,
    },
    {
        _id: 23,
        text: 'Eu curso arquitetura, são 5 anos',
        createdAt: new Date('2023-08-27T19:07:00Z'),
        user: userGabi,
    },
    {
        _id: 24,
        text: 'Ah legal',
        createdAt: new Date('2023-08-27T19:07:00Z'),
        user: userGabi,
    },
    {
        _id: 25,
        text: 'Verdade, dá kk',
        createdAt: new Date('2023-08-27T19:07:00Z'),
        user: userGabi,
    },
    {
        _id: 26,
        text: 'Nossa, então cê tá quase formando, igual eu',
        createdAt: new Date('2023-08-27T19:07:00Z'),
        user: userLeonardo,
    },
    {
        _id: 27,
        text: 'Cê gosta do curso?',
        createdAt: new Date('2023-08-27T19:07:00Z'),
        user: userLeonardo,
    },
    {
        _id: 28,
        text: 'Kkkkk se voce animar, clarooo',
        createdAt: new Date('2023-08-27T19:07:00Z'),
        user: userLeonardo,
    },
    {
        _id: 29,
        text: 'Aí mais um ano',
        createdAt: new Date('2023-08-27T19:38:00Z'),
        user: userGabi,
    },
    {
        _id: 30,
        text: 'Mas quase kk',
        createdAt: new Date('2023-08-27T19:38:00Z'),
        user: userGabi,
    },
    {
        _id: 31,
        text: 'Gosto',
        createdAt: new Date('2023-08-27T19:38:00Z'),
        user: userGabi,
    },
    {
        _id: 32,
        text: 'gosta do seu?',
        createdAt: new Date('2023-08-27T19:38:00Z'),
        user: userGabi,
    },
    {
        _id: 33,
        text: 'Passa rápido, cê vai ver',
        createdAt: new Date('2023-08-27T19:38:00Z'),
        user: userLeonardo,
    },
    {
        _id: 34,
        text: 'Boa sorte com o tcc, enche o saco kkkk',
        createdAt: new Date('2023-08-27T19:38:00Z'),
        user: userLeonardo,
    },
    {
        _id: 35,
        text: 'Eu gosto demaiss',
        createdAt: new Date('2023-08-27T19:38:00Z'),
        user: userLeonardo,
    },
    {
        _id: 36,
        text: 'É bom né, eu já tive dificuldade com escolha de curso, não sei você',
        createdAt: new Date('2023-08-27T19:38:00Z'),
        user: userLeonardo,
    },
    {
        _id: 37,
        text: 'Nossa eu enrolei 3 anos pra decidir kk',
        createdAt: new Date('2023-08-27T19:38:00Z'),
        user: userGabi,
    },
    {
        _id: 38,
        text: 'Sério? Cê chegou a fazer algo antes?',
        createdAt: new Date('2023-08-27T19:38:00Z'),
        user: userLeonardo,
    },
    {
        _id: 39,
        text: 'Não',
        createdAt: new Date('2023-08-27T19:38:00Z'),
        user: userGabi,
    },
    {
        _id: 40,
        text: 'Se eu começasse meu pai deixaria eu parar kk',
        createdAt: new Date('2023-08-27T19:38:00Z'),
        user: userGabi,
    },
    {
        _id: 41,
        text: 'Não deixaria cê fala?',
        createdAt: new Date('2023-08-27T20:43:00Z'),
        user: userLeonardo,
    },
    {
        _id: 42,
        text: 'Isso',
        createdAt: new Date('2023-08-27T21:00:00Z'),
        user: userGabi,
    },
    {
        _id: 43,
        text: 'Não vi q pulei o não kk',
        createdAt: new Date('2023-08-27T21:00:00Z'),
        user: userGabi,
    },
    {
        _id: 44,
        text: 'Huahaha',
        createdAt: new Date('2023-08-27T22:07:00Z'),
        user: userLeonardo,
    },
    {
        _id: 45,
        text: 'Mas que bom que tá dando certo',
        createdAt: new Date('2023-08-27T22:07:00Z'),
        user: userLeonardo,
    },
    {
        _id: 46,
        text: 'Aí de formando, você tem planos?',
        createdAt: new Date('2023-08-27T22:07:00Z'),
        user: userLeonardo,
    },
    {
        _id: 47,
        text: 'ainda não',
        createdAt: new Date('2023-08-27T22:07:00Z'),
        user: userGabi,
    },
    {
        _id: 48,
        text: 'Se eu sobreviver já é ok',
        createdAt: new Date('2023-08-27T22:07:00Z'),
        user: userGabi,
    },
    {
        _id: 49,
        text: 'E você?',
        createdAt: new Date('2023-08-27T22:07:00Z'),
        user: userGabi,
    },
    {
        _id: 50,
        text: 'Kkkkk',
        createdAt: new Date('2023-08-27T22:07:00Z'),
        user: userLeonardo,
    },
    {
        _id: 51,
        text: 'Sobreviver é importante né',
        createdAt: new Date('2023-08-27T22:07:00Z'),
        user: userLeonardo,
    },
];

export default Messages;
