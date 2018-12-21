// 获取链接上面的参数
export function getParams(key?: string) {
  const params: any = {};
  let arr = [];
  window.location.search
    .slice(1)
    .split('&')
    .forEach((param) => {
      arr = param.split('=');
      params[arr[0]] = arr[1];
    });
  return key ? params[key] : params;
}
