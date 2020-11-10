import LocalStorage from './LocalStorage';

export default class ScopedStorage extends LocalStorage {
  constructor(scopeId = 'scopeId', ...rest) {
    super(rest);
    this.scope = `__${scopeId}://`;
  }

  getScopedKey(key) {
    return this.scope + key;
  }

  parseScopedKey(scopedKey) {
    return scopedKey.substring(this.scope.length);
  }

  setItem(key, value) {
    const scopedKey = this.getScopedKey(key);
    return super.setItem(scopedKey, value);
  }

  getItem(key) {
    const scopedKey = this.getScopedKey(key);
    return super.getItem(scopedKey);
  }

  removeItem(key) {
    const scopedKey = this.getScopedKey(key);
    return super.removeItem(scopedKey);
  }

  getAllKeys() {
    return super.getAllKeys()
      .then((keys) => keys.filter(key => {
        const prefix = key.substring(this.scope.length);
        return prefix === this.scope;
      }));
  }

  multiGet(keys, callback) {
    const scopedKeys = keys.map(this.getScopedKey);
    return super.multiGet(scopedKeys, callback)
      .then((keyValuePairs) =>
        keyValuePairs.map(([key, value]) => ([this.parseScopedKey(key), value])));
  }

  multiSet(keyValuePairs, callback) {
    const data = keyValuePairs.map(([key, value]) => ([this.getScopedKey(key), value]));
    return super.multiSet(data, callback);
  }

  multiRemove(keys, callback) {
    const scopedKeys = keys.map(this.getScopedKey);
    return super.multiRemove(scopedKeys, callback);
  }

  async clear(callback) {
    const scopedKeys = await this.getAllKeys();
    return super.multiRemove(scopedKeys);
  }
}
