import product_five from "../../images/product-5.jpg";

interface IProduct {
    id: number;
    image: string;
    category: string;
    name: string;
    price: string;
    stars: number;
    reviews: string[];
}

interface IProducts {
    products: IProduct[];
}

export const Products: IProducts = {
    products: [
        {
            id: 0,
            image: product_five,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },
    ],
};
