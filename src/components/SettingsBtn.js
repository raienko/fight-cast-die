import React from 'react';
import Touchable from 'rn-units/components/Touchable';
import Icon from 'src/components/Icon';

export default class SettingsBtn extends React.PureComponent {
  render() {
    return (
      <Touchable {...this.props}>
        <Icon font={Icon.fonts.AntDesign} name="setting" />
      </Touchable>
    );
  }
}
