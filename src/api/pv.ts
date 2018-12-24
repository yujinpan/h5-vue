/**
 * pv接口
 */
import request from '@/utils/request';

// IP访问量
export function setPv() {
  return request({
    url: 'pv/set'
  });
}
