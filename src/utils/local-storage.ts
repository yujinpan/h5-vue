/**
 * 本地数据存储
 */
// 存储
export function getLocalStorage(key: string) {
  return window.localStorage.getItem(key) || '';
}

// 取出
export function setLocalStorage(key: string, value: any) {
  window.localStorage.setItem(key, value);
}
