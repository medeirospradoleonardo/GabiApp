import React, { useState } from 'react';


import { Image } from 'react-native';
import Messages from '../assets/messages';

import { Bubble, GiftedChat } from 'react-native-gifted-chat';

const background = require('../assets/background.jpg');
const BACKGROUND_IMAGE = Image.resolveAssetSource(background).uri;

const Chat = ({ }) => {
  const [messages, setMessages] = useState(Messages);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      inverted={false}
      // user={{
      //   _id: 1,
      //   name: 'Leonardo',
      //   avatar: BACKGROUND_IMAGE,
      // }}
      user={{
        _id: 2,
        name: 'Gabriela',
        avatar: BACKGROUND_IMAGE,
      }}
      locale="pt-br"
      dateFormat="llll"
      renderInputToolbar={() => null}
      renderSend={() => null}
      messagesContainerStyle={{ height: '100%' }}
      disableComposer={true}
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
