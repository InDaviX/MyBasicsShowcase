import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const MyText = ({name}) => {
  const handle = () => {
    alert('You just pressed the text component!');
  };
  return (
    <TouchableHighlight
      style={style.box}
      underlayColor="#e0b8b6"
      onPress={handle}>
      <Text style={style.text}>Hello {name}!</Text>
    </TouchableHighlight>
  );
};

MyText.propTypes = {
  name: PropTypes.string.isRequired,
};
export default MyText;
