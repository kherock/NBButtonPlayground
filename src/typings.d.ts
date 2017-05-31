// Augmenting typings for components new in 'native-base' 2.0.0

import * as React from 'react';
import * as ReactNative from 'react-native';

declare module 'native-base' {
  namespace NativeBase {
    interface StyleProvider {
      children?: React.ReactChildren;
      style: any;
    }
  }

  export class StyleProvider extends React.Component<NativeBase.StyleProvider, any> {
  }
}
