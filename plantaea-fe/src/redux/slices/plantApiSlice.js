import { apiSlice } from '@redux/slices/apiSlice'

const PLANTS_URL = '/api/plant';

export const plantApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchPlantsData: builder.query({
            query: () => ({
                url: `${PLANTS_URL}/fetchPlants`,
                method: 'GET',
            })
        })
    }),
    overrideExisting: true,
})

export const { useFetchPlantsDataQuery } = plantApiSlice;