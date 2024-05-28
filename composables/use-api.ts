import {hash} from 'ohash'


export default (path:string, options: RequestOptions = <RequestOptions>{}) => {
    const runtimeConfig = useRuntimeConfig();
    const key = options && options.key ? {
        key: hash(Date.now()),
    } : {}

    return useFetch(path, {
        ...options,
        ...key,
        baseURL: options.baseURL ?? runtimeConfig.public.apiBaseUrl,
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
    })
}
