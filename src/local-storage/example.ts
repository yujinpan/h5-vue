/**
 * example 相关的 localStorage 管理
 */
import { getLocalStorage, setLocalStorage } from '../utils/local-storage';

// count 计数
const countStorageName = 'COUNT';
export function getBusKeyword() {
  return getLocalStorage(countStorageName);
}
export function setBusKeyword(count: number) {
  return setLocalStorage(countStorageName, count);
}
