import AsyncStorage from '@react-native-community/async-storage';

export default class LocalStorage {
  prefix;

  constructor(prefix = '') {
    this.prefix = prefix;
  }

  getKeyWithPrefix(key) {
    return this.prefix + key;
  }

  parseKeyWithPrefix(keyWithPrefix) {
    return keyWithPrefix.substring(this.prefix?.length);
  }

  setItem(key, value) {
    const keyWithPrefix = this.getKeyWithPrefix(key);
    return AsyncStorage.setItem(keyWithPrefix, JSON.stringify(value));
  }

  getItem(key) {
    const keyWithPrefix = this.getKeyWithPrefix(key);
    return AsyncStorage.getItem(keyWithPrefix).then((data) => {
      return data ? JSON.parse(data) : data;
    });
  }

  removeItem(key) {
    const keyWithPrefix = this.getKeyWithPrefix(key);
    return AsyncStorage.removeItem(keyWithPrefix);
  }
}
