import  {defineFormKitConfig} from '@formkit/vue'
import {rootClasses} from "~/formkit.theme";
import {genesisIcons} from "@formkit/icons";
import {createMultiStepPlugin} from "@formkit/addons";
import {NumberInput, OTPInput} from "#components";

export default defineFormKitConfig({
    config: {
        rootClasses,
        classes: {
            input: "rounded-md",
            inner: 'w-full',
            label: 'uk-form-label',
            wrapper: 'w-full',
            outer:'w-full max-w-full'
        }
    },
    icons: {
        ...genesisIcons
    },
    plugins: [createMultiStepPlugin()],
    inputs: {
        phonenumber: createInput(NumberInput),
        otpinput: createInput(OTPInput),
    }
})
