import {installToaster, type ToasterOptions} from "maz-ui";

export default defineNuxtPlugin(nuxtApp => {
    const toasterOptions: ToasterOptions = {
        position: 'top-right',
        timeout: 5000,
        persistent: false,
    }
    nuxtApp.vueApp.use(installToaster ,toasterOptions)
})
