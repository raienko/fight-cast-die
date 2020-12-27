import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {rem} from 'rn-units';
import theme from 'src/constants/theme';
import Button from 'src/components/Button';
import * as settingsActions from 'src/store/settings/actions';

const languages = {
  en: '🇺🇸',
  ru: '🇷🇺',
  ua: '🇺🇦',
};

const mapStateToProps = (state) => ({
  language: state.settings.language,
});

export default connect(mapStateToProps)(class LanguagePanel extends React.PureComponent {
  static propTypes = {
    language: PropTypes.string,
  };

  renderBtn = (locale) => {
    const {language} = this.props;
    const active = locale === language;
    return (
      <Button
        key={locale}
        value={languages[locale]}
        style={[styles.btn, active && styles.btnActive]}
        onPress={() => settingsActions.changeLanguage(locale)}
      />
    );
  };

  render() {
    const locales = Object.keys(languages);
    return (
      <View style={styles.wrapper}>
        {
          locales.map(this.renderBtn)
        }
      </View>
    );
  }
});

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: rem(60),
    minWidth: undefined,
  },
  btnActive: {
    backgroundColor: theme.blue,
  }
});
