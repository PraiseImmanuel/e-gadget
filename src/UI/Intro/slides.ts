import slideOne from "../../images/slide-1.jpg";
import slideOneSm from "../../images/slide-1-sm.jpg";
import slideTwo from "../../images/slide-2.jpg";
import slideTwoSm from "../../images/slide-2-sm.jpg";

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
            offerSupPrice: `$500`,
            price: `$345`,
            priceSup: ".99",
            images: [slideOne, slideOneSm],
        },
        {
            id: 1,
            offerType: "Daily Deals",
            productName: "MacBook Pro",
            offerSupText: `Today`,
            offerSupPrice: "",
            price: `$5448`,
            priceSup: ".99",
            images: [slideTwo, slideTwoSm],
        },
    ],
};
