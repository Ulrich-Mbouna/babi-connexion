declare global {
    enum UserType {
        PARTICULIER= 'particulier',
        AGENT = 'agent',
        DEFAULT = null
    }

    interface UserRegister {
        name: string;
        firstName: string;
        email: string;
        password: string;
        password_confirmation: string;
        phone: string;
        role: string;
    }

    interface UserRegisterAgent extends UserRegister {
        avatar: string;
        identityCard: string
    }

}
export  default {}
