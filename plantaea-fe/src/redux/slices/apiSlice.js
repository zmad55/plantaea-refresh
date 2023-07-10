import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@config/urls';

const baseQuery = fetchBaseQuery({ baseUrl: API_BASE_URL });

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User', 'Plants'],
    endpoints: (builder) => ({}),
})