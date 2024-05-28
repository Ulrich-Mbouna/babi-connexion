import {joinURL} from "ufo";

export default eventHandler(async event => {
    const runtimeConfig = useRuntimeConfig();
    const cookie = parseCookies(event);
    const token = cookie['auth.token'];

    const proxyUrl = runtimeConfig.public.apiBaseUrl;

    const path = event.path.replace(/^\/api\//,'')
    const target = joinURL(proxyUrl,path);

    return proxyRequest(event, target, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
})
