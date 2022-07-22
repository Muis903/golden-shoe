// CONTACT FORM TYPE

export interface IContactForm {
    name: string;
    email: string;
    phone: string;
    message: string;
    isSendCopyEnabled: boolean;
}

// PRODUCT TYPE

interface IColor {
    name: string;
    imageSrc: string;
    imageAlt: string;
    class: string;
    selectedClass: string;
}

interface ISize {
    name: string;
    inStock: boolean;
}

interface IProduct {
    pid: number;
    name: string;
    href: string;
    price: string;
    rating: number;
    reviewCount: number;
    colors: IColor[];
    sizes: ISize[];
}

export interface IManProduct {
    id: number;
    product: IProduct;
}

export interface IWomanProduct {
    id: number;
    product: IProduct;
}
