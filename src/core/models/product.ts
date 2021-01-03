export type TProduct = {
    _id: string;
    title: string;
    tone: string;
    brand: string;
    category: string;
    description: string;
    gender: string;
    images: Array<string>;
    price: number;
    priceCategory: string;
    event?: string;
    constitution?: string;
}