import React, { Component } from 'react';
import {
  View,
  Image,
  requireNativeComponent,
} from 'react-native';

class ImageCapInset extends Component {
  render() {
    const {
      children,
      source,
      capInsets,
      ...rest
    } = this.props;

    const normalizedSource = Image.resolveAssetSource(source);

    return (
      <View {...rest}>
        <RCTImageCapInset
          style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          capInsets={capInsets}
          source={normalizedSource}
          resizeMode={'stretch'}
        />
        {children}
      </View>
    );
  }
}

const RCTImageCapInset = requireNativeComponent('RCTImageCapInset');

export default ImageCapInset;
