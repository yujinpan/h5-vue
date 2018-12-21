/**
 * example接口
 */
import request from '@/utils/request';

// 获取example
export function getExample(id: number) {
  return request({
    url: 'api/example',
    params: {
      id
    }
  });
}
