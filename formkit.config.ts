import  {defineFormKitConfig} from '@formkit/vue'
import {rootClasses} from "~/formkit.theme";
import {genesisIcons} from "@formkit/icons";
import {createMultiStepPlugin} from "@formkit/addons";

export default defineFormKitConfig({
    config: {
        rootClasses,
        classes: {
            input: 'rounded-md',
            inner: 'w-full',
            label: 'uk-form-label',
            form: 'uk-form-stacked',
            wrapper: 'w-full',
            outer:'w-full'
        }
    },
    icons: {
        ...genesisIcons
    },
    plugins: [createMultiStepPlugin()]
})
