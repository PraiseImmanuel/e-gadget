export interface IProduct {
    id: number;
    image: string;
    category: string;
    name: string;
    price: string;
    stars: number;
    reviews: string[];
}

export interface IProductDeals {
    id: number;
    image: string;
    category: string;
    name: string;
    price: string;
    old_price: string;
    stars: number;
    reviews: string[];
}

export interface ICountdown {
    hours: number;
    minutes: number;
    seconds: number;
}

export interface ITProducts {
    all: IProduct[];
    household: IProduct[];
    computers: IProduct[];
    phones: IProduct[];
    gaming: IProduct[];
    watches: IProduct[];
}

export interface ListItems {
    text: string;
    hRef: string;
}

export interface Link {
    heading: string;
    listItems: ListItems[];
}
