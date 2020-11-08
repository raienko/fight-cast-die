import AsyncStorage from '@react-native-community/async-storage';

class LocalStorage {
  setItem(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key) {
    return AsyncStorage.getItem(key).then((data) => {
      return data ? JSON.parse(data) : data;
    });
  }
}

export default new LocalStorage();
