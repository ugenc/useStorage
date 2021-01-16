import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useStorage(key: string) {
  const [storageItem, setStorageItem] = useState(null);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      setStorageItem(jsonValue != null ? JSON.parse(jsonValue) : null);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const saveStorageItem = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      setStorageItem(value);
    } catch (e) {
      // saving error
    }
    // return value;
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.removeItem(key);
      setStorageItem(null);
    } catch (e) {
      // remove error
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [storageItem, saveStorageItem, clearStorage];
}
