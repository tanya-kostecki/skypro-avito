interface Page {
    namePage: string;
}

interface Props {
    isLoginMode?: boolean;
    email?: string;
    password?: string;
}

// interface Product {
//     id: number;
//     descriptionTitle: string;
//     price: string;
//     city: string;
//     date: string;
// }
//
interface IImg {
    id: number;
    ad_id: number;
    url: string;
}

interface IUser {
    id: number;
    name: string;
    email: string;
    city: string;
    avatar: string;
    sells_from: string;
    phone: string;
    role: string;
    surname: string;
}

export interface IAdv {
    title: string;
    description?: string; //
    price: number;
    id: number;
    images: IImg[]; //
    user_id?: number; //
    created_on: string;
    user?: IUser; //
}