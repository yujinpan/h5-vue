/**
 * 获取路由参数
 * @description
 * 对于不使用 Router 的分页，可以使用该函数获取路由上的参数。
 * @param key 获取路由上面参数的值，参数为空，返回所有参数的集合。
 */
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
