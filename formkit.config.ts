import  {defineFormKitConfig} from '@formkit/vue'
import {rootClasses} from "~/formkit.theme";
import {genesisIcons} from "@formkit/icons";

export default defineFormKitConfig({
    config: {
        rootClasses,
        classes: {
            input: '$reset uk-input rounded-md',
            inner: '$reset w-full',
            label: 'uk-form-label !text-black',
            form: 'uk-form',
            wrapper: 'w-full',
            outer:'max-w-full'
        }
    },
    icons: {
        ...genesisIcons
    }
})
