declare module "@formkit/inputs" {
    interface FormKitInputProps<Props extends  FormKitInputProps<Props>> {
        'phonenumber': {
            type: 'phonenumber',
            value?: number
        },
        'otpinput': {
            type: 'otpinput',
            value?: number
        },
    }
}
