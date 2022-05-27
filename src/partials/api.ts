import axios from 'axios';

export async function getResquest(url: any, data: any) {
  const res = await axios({
    url: `${process.env.BASE_URL}/${url}`,
    method: 'GET',
    headers: {},
    data,
    withCredentials: true,
  });
  return res;
}
export async function getResquestWithId(url: any, data: any, id: any) {
  const res = await axios({
    url: `${process.env.BASE_URL}/${url}/${id}`,
    method: 'GET',
    headers: {},
    data,
    withCredentials: true,
  });
  return res;
}
export async function postResquest(url: any, data: any) {
  const res = await axios({
    url: `${process.env.BASE_URL}/${url}`,
    method: 'POST',
    headers: {},
    data,
    withCredentials: true,
  });
  return res;
}
export async function postResquestWithId(url: any, data: any, id: any) {
  const res = await axios({
    url: `${process.env.BASE_URL}/${url}/${id}`,
    method: 'POST',
    headers: {},
    data,
    withCredentials: true,
  });
  return res;
}
