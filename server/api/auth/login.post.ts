import {useState} from "nuxt/app";

export default eventHandler(async event => {
    const runtimeConfig = useRuntimeConfig();
    const data = await readBody(event)

    console.log({data})
    try {
        const response: LoginResponse = await $fetch(`${runtimeConfig.public.apiBaseUrl}/auth/login`, {
            method: "POST",
            body: data,
        })

        if(response.status) {
            const {user, tokens} = response
            await useStorage().setItem('user-data', JSON.stringify(user))

            return {
                user,
                tokens
            }
        }
    }catch (error) {
        console.log({error})
    }
})
