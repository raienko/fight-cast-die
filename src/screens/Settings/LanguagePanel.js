import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'src/components/Button';
import * as settingsActions from 'src/store/settings/actions';
import {rem} from 'rn-units';

const mapStateToProps = (state) => ({
  language: state.settings.language,
});

function LanguagePanel() {
  return (
    <View style={styles.wrapper}>
      <Button value="🇺🇸" style={styles.btn} onPress={() => settingsActions.changeLanguage('en')} />
      <Button value="🇷🇺" style={styles.btn} onPress={() => settingsActions.changeLanguage('ru')} />
      <Button value="🇺🇦" style={styles.btn} onPress={() => settingsActions.changeLanguage('ua')} />
    </View>
  );
}

LanguagePanel.propTypes = {
  language: PropTypes.string,
};

export default connect(mapStateToProps)(LanguagePanel);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: rem(60),
    minWidth: undefined,
  },
});
