import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
    reducerPath:"todoApi",
    tagTypes:["todo"],
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000/"
    }),
    endpoints:(builder) => ({
        getAllTodo: builder.query({
            query:() => 'todo',
            providesTags: (result) =>
                result
                  ? [
                      ...result.map(({ id }) => ({ type: 'todo', id })),
                      { type: 'todo', id: 'LIST' },
                    ]
                  : [{ type: 'todo', id: 'LIST' }],
        }),
        addTodo:builder.mutation({
            query:(body) => ({
                url:"todo",
                method: "POST",
                body,
            }),
            invalidatesTags:[{type:'todo'}]
        }),
        deleteTodo: builder.mutation({
            query:(id) => ({
                url:`todo/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:[{type: 'todo'}]
        }),
        updateTodo:builder.mutation({
            query:(body) => ({
                url: `todo/${body.id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags:[{type:'todo'}]
        }),
        moreTodo:builder.query({
            query:(id) => ({
                url:`todo/${id}`,
                method:"GET",
            })
        })
    })
})
export const {useGetAllTodoQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation, useMoreTodoQuery} = todoApi