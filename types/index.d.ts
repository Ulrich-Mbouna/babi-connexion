import type {UseFetchOptions} from "#app";

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

    interface FileInput {
        name: string;
        file: File
    }

    interface SignInPayload {
        username: string;
        password: string;
    }
    interface LoginWithOTP {
        phone: string;
    }
    interface SuccessRequest {
        status: boolean,
        message: string,
    }
    interface LoginResponse {
        status: boolean,
        message: string,
        user: UserData,
        tokens: { access: object, refresh: object }
    }

    interface UserData {
        id: string,
        name: string,
        firstName: string,
        email: string,
        phone: number,
        role: sring,
        status: string,
        media: object,
    }

}

export  default {}
