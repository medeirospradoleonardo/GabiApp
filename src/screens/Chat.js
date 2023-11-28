import React, { useState } from 'react';

import { GiftedChat} from 'react-native-gifted-chat';
require('dayjs/locale/pt-br');

const background = require('../assets/background.png');
import {Image} from 'react-native';
import Messages from '../assets/messages';

const BACKGROUND_IMAGE = Image.resolveAssetSource(background).uri;

const Chat = ({ navigation }) => {
    const [messages, setMessages] = useState(Messages);

    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            inverted={false}
            user={{
                _id: 1,
                name: 'Leonardo',
                avatar: BACKGROUND_IMAGE,
            }}
            locale="pt-br"
            dateFormat="llll"
            renderInputToolbar={() => null}
        />
    );
};

export default Chat;
