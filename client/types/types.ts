// CONTACT FORM TYPE

// NOTE: If you change any name of the key than the API call will fail!
export interface IContactForm {
    name: string; // name of user
    email: string; // email of user
    phone: string; // phone of user
    message: string; // message of user
    isSendCopyEnabled: boolean; // whether send or not copy of message to user
}

// PRODUCT TYPE

// NOTE: If you change any name of the key than the API call will fail!
interface IColor {
    name: string; // name of the color (white)
    imageSrc: string; // image URL (https://.....png...)
    imageAlt: string; // image Alternative name (This are white shoes)
    class: string; // tailwind CSS color when not selected
    selectedClass: string; // tailwind CSS color when selected
}

// NOTE: If you change any name of the key than the API call will fail!
interface ISize {
    name: string; // size name for a shoe (42.5)
    inStock: boolean; // whether the shoe in stock or not (true/false). If not in stock user will be not able to choose it to buy.
}

// NOTE: If you change any name of the key than the API call will fail!
export interface IProduct {
    id: number; // primary key id that is automaticly defined by Django while saving database
    product: {
        // product object wherein all props are locating
        pid: number; // product id that we defining in backend
        name: string; // name of product
        href: string; // URL to product
        price: string; // price of product in British pounds
        rating: number; // user rating of shoe that we self defined on backend for now
        reviewCount: number; // how many reviews are there that made by users how has purchased the shoes
        colors: IColor[]; // colors of the shoe model
        sizes: ISize[]; // sizes of the shoe
    };
}
