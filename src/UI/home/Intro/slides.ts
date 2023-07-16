interface Slide {
    id: number;
    offerType: string;
    productName: string;
    offerSupPrice: string;
    offerSupText: string;
    price: string;
    priceSup: string;
    images: [string, string];
}

interface Slides {
    slides: Slide[];
}

export const NewSlides: Slides = {
    slides: [
        {
            id: 0,
            offerType: "Promo Deals",
            productName: "Stereo Bluetooth",
            offerSupText: "",
            offerSupPrice: "24,255",
            price: "₦15,000",
            priceSup: ".99",
            images: [
                "https://res.cloudinary.com/dj25aashz/image/upload/v1689542650/e-gadgets/slide-1_serisj.jpg",
                "https://res.cloudinary.com/dj25aashz/image/upload/v1689542650/e-gadgets/slide-1-sm_ovw2kr.jpg",
            ],
        },
        {
            id: 1,
            offerType: "Daily Deals",
            productName: "Lenovo IDEAPAD",
            offerSupText: `Today`,
            offerSupPrice: "",
            price: "₦95,000",
            priceSup: ".99",
            images: [
                "https://res.cloudinary.com/dj25aashz/image/upload/v1689542650/e-gadgets/slide-2_rs4clg.jpg",
                "https://res.cloudinary.com/dj25aashz/image/upload/v1689542650/e-gadgets/slide-2-sm_l1lmya.jpg",
            ],
        },
        {
            id: 2,
            offerType: "Featured",
            productName: "Pressure Pot Cooker",
            offerSupText: "",
            offerSupPrice: "",
            price: `₦18,800`,
            priceSup: ".99",
            images: [
                "https://res.cloudinary.com/dj25aashz/image/upload/v1689542650/e-gadgets/slide-3_fk2ml7.jpg",
                "https://res.cloudinary.com/dj25aashz/image/upload/v1689542650/e-gadgets/slide-3-sm_hlnjok.jpg",
            ],
        },
    ],
};
