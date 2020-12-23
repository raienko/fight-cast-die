import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'src/components/Button';
import * as settingsActions from 'src/store/settings/actions';

const mapStateToProps = (state) => ({
  language: state.settings.language,
});

function LanguagePanel() {
  return (
    <View style={styles.wrapper}>
      <Button text="ru" onPress={() => settingsActions.changeLanguage('ru')} />
      <Button text="en" onPress={() => settingsActions.changeLanguage('en')} />
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
});
