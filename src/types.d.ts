interface Page {
    namePage: string;
}

interface Props {
    isLoginMode?: boolean;
    email?: string;
    password?: string;
}

interface Product {
    id: number;
    descriptionTitle: string;
    price: string;
    city: string;
    date: string;
}