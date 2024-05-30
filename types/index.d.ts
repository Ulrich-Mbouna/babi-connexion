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
    }

    interface UserRegisterAgent extends UserRegister {
        avatar: string;
        identityCard: string
    }

    interface IdentityPayload {
        role: string;
        avatar: FileInput[];
        identityCard: FileInput[];
    }

    interface RequestOptions {
        key: string;
        baseURL: string;
    }

    interface FileInput {
        name: string;
        file: File
    }

    interface SignInPayload {
        username: string;
        password: string;
    }

}
export  default {}
