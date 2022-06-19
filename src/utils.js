function useStorage(key, val, storageType = 'localStorageType') {
  const storage = window[storageType];
  if (val === undefined) {
    return storage.getItem(key);
  } else {
    storage.setItem(key, val);
  }
}
