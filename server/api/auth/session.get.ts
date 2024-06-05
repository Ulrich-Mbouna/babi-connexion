import {getServerSession} from "#auth";

export default eventHandler(async event => {
    const session = await getServerSession(event)
    const value = await useStorage().getItem('user-data')
    console.log({value,session})

    return  value
})
