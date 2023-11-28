import React, { useState } from 'react';


const background = require('../assets/background.png');
import {Image} from 'react-native';
import Messages from '../assets/messages';

import { Bubble, GiftedChat } from 'react-native-gifted-chat';
const BACKGROUND_IMAGE = Image.resolveAssetSource(background).uri;

const Chat = ({  }) => {
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
            // renderMessage={(p) => {
            //     // console.log(p.currentMessage?.user._id );
            //     return null;
            // }}
            renderBubble={(props) => {
                return (<Bubble
                    {...props}
                    textStyle={{
                        right: {
                        color: 'white',
                      },
                    }}
                    wrapperStyle={{
                      left: {
                        backgroundColor: 'white',
                      },
                      right: {
                        backgroundColor: 'tomato',
                      },
                    }}
                  />);
            }}
        />
    );
};

export default Chat;