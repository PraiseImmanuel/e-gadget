// import banner_1 from "../../../images/banner-3.jpg";
// import banner_2 from "../../../images/banner-2.jpg";
// import banner_3 from "../../../images/banner-1.jpg";

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
            image: "https://res.cloudinary.com/dj25aashz/image/upload/v1689360622/e-gadgets/banner-3_rvrftf.jpg",
        },
        {
            id: 1,
            offerType: "Featured",
            productName: "Apple Watch 5",
            offerDetail: "Hottest Deals",
            image: "https://res.cloudinary.com/dj25aashz/image/upload/v1689360622/e-gadgets/banner-2_pkps8j.jpg",
        },
        {
            id: 2,
            offerType: "Featured",
            productName: "Apple Watch 5",
            offerDetail: "Hottest Deals",
            image: "https://res.cloudinary.com/dj25aashz/image/upload/v1689360622/e-gadgets/banner-1_tsnpj8.jpg",
        },
    ],
};
