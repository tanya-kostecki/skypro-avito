interface Page {
    namePage?: string;
    adId?: number;
    userId?: number
}

interface Props {
    isLoginMode?: boolean;
    email?: string;
    password?: string;
}

interface IImg {
    id: number;
    ad_id: number;
    url: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    city?: string;
    avatar?: string;
    sells_from?: string;
    phone?: string;
    role?: string;
    surname?: string;
}

export interface IAdv {
    title: string;
    description?: string; 
    price: number;
    id: number;
    images: IImg[];
    user_id?: number;
    created_on: string;
    user: IUser;
}

export interface IComment {
    id: number;
    text: string;
    created_on: string;
    author: IUser;
}