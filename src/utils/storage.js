import AsyncStorage from '@react-native-community/async-storage';

export default new (class Storage {
  setItem(key, value, options) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key, options) {
    return AsyncStorage.getItem(key).then((data) => {
      return data ? JSON.parse(data) : data;
    });
  }
})();
