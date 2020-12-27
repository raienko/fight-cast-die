import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from 'src/components/Header';
import H1 from 'src/components/H1';
import Button from 'src/components/Button';
import BackBtn from 'src/components/BackBtn';
import navigation from 'src/navigation';
import Screen from 'src/components/Screen';
import Toggle from 'src/components/Toggle';
import * as authActions from 'src/store/auth/actions';
import * as settingsActions from 'src/store/settings/actions';
import LanguagePanel from './LanguagePanel';

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(
  class Settings extends React.PureComponent {
    static propTypes = {
      settings: PropTypes.object.isRequired,
    };

    toggleMusic = () => {
      const {settings} = this.props;
      return settingsActions.toggleMusic(!settings.music);
    };

    toggleVibration = () => {
      const {settings} = this.props;
      return settingsActions.toggleVibration(!settings.vibration);
    };

    toggleNotifications = () => {
      const {settings} = this.props;
      return settingsActions.toggleNotifications(!settings.notifications);
    };

    render() {
      const {settings} = this.props;
      return (
        <Screen>
          <Header>
            <BackBtn onPress={() => navigation.back()} />
            <H1 text="settings.title" />
          </Header>
          <LanguagePanel />
          <Toggle text="settings.music" value={settings.music} onPress={this.toggleMusic} />
          <Toggle text="settings.vibration" value={settings.vibration} onPress={this.toggleVibration} />
          <Toggle text="settings.notifications" value={settings.notifications} onPress={this.toggleNotifications} />
          <Button text="logout" onPress={authActions.logout} />
        </Screen>
      );
    }
  },
);
