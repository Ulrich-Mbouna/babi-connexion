import {hash} from 'ohash'
import type {UseFetchOptions} from "#app";


export default <T>(path:string, options: UseFetchOptions<T> = {}) => {
    const runtimeConfig = useRuntimeConfig();
    const key = options && options.key ? {
        key: hash(Date.now()),
    } : {}

    const accessToken = useCookie('accessToken');

    const defaults: UseFetchOptions<T> = {
        ...options,
        ...key,
        baseURL: options.baseURL ?? runtimeConfig.public.apiBaseUrl as string,
        headers: accessToken.value ? {
            Authorization: `Bearer ${accessToken.value}`
        }: {},
        async onResponse({request,response, options} ) {
            response._data = response._data.data ?? response._data

        },
        async onResponseError({response}) {
            return new Promise((resolve, reject) => {
                response.ok ? resolve() : reject({
                    statusCode: response.status || 500,
                    name: response._data.name || 'Error',
                    message: response._data.message || 'Something went wrong',
                    stack: response._data.stack,
                    data: response._data
                });
            })
        }
    }

    return useFetch(path,defaults)
}
