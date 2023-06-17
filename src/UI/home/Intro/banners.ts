import banner_1 from "../../../images/banner-1.jpg";

interface Banner {
    id: number;
    offerType: string;
    productName: string;
    offerDetail: string;
    image: string;
}

interface Banners {
    banners: Banner[];
}

export const NewBanner: Banners = {
    banners: [
        {
            id: 0,
            offerType: "Featured",
            productName: "Apple Watch 5",
            offerDetail: "Hottest Deals",
            image: banner_1,
        },
        {
            id: 1,
            offerType: "Featured",
            productName: "Apple Watch 5",
            offerDetail: "Hottest Deals",
            image: banner_1,
        },
        {
            id: 2,
            offerType: "Featured",
            productName: "Apple Watch 5",
            offerDetail: "Hottest Deals",
            image: banner_1,
        },
    ],
};
