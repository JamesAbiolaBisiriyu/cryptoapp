import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'


const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'af4e4c3ca3msha4b53d0a8175958p1ca70ejsn7a1525d010ad',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = ' https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi', // Optional, but required if you use more than
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/exchanges')
    })
  })
});