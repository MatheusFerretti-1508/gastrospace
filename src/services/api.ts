/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../components/RestaurantCard'

type Product = {
    id: number,
    preco: number
}

type PurchaseResponse = {
    orderId: string
}

type PurchasePayload = {
    products: Product[]
    delivery: {
        receiver: string,
        address: {
            description: string,
            city: string,
            zipCode: string,
            number: number,
            complement: string,
        },
    }
    payment: {
        card: {
            name?: string
            number?: string
            expires?: {
                month: number
                year: number
            }
            code?: number
        }
    }
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<Restaurant[], void>({
            query: () => 'restaurantes'
        }),
        getRestaurant: builder.query<Restaurant, string>({
            query: (id) => `restaurantes/${id}`,
        }),
        purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
            query: (body) => ({
                url: `restaurantes`,
                method: 'POST',
                body
            })
        })
    })
})

export const {
    useGetRestaurantsQuery,
    useGetRestaurantQuery,
    usePurchaseMutation,
} = api

export default api