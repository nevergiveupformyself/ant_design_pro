import request from 'umi-request';

export async function queryCurrent() {
  return request('/api/currentUser');
}
export async function queryFakeList(params) {
  return request('/api/fake_list', {
    params,
  });
}
