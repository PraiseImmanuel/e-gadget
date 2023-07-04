import product_five from "../../../images/product-5.jpg";
import product_two from "../../../images/product-7.jpg";
import product_four from "../../../images/product-13.jpg";

interface IProduct {
    id: number;
    image: string;
    category: string;
    name: string;
    price: string;
    stars: number;
    reviews: string[];
}

interface IProductDeals {
    id: number;
    image: string;
    category: string;
    name: string;
    price: string;
    old_price: string;
    stars: number;
    reviews: string[];
}

interface IProducts {
    featured: IProduct[];
    promo_deals: IProductDeals[];
    gift_ideas: IProduct[];
}

export const Products: IProducts = {
    featured: [
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

        {
            id: 1,
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

        {
            id: 2,
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

        {
            id: 3,
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

        {
            id: 4,
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

        {
            id: 5,
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

        {
            id: 6,
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

        {
            id: 7,
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

    promo_deals: [
        {
            id: 0,
            image: product_two,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            old_price: "$351.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },

        {
            id: 1,
            image: product_two,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            old_price: "$351.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },

        {
            id: 2,
            image: product_two,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            old_price: "$351.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },

        {
            id: 3,
            image: product_two,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            old_price: "$351.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },

        {
            id: 4,
            image: product_two,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            old_price: "$351.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },

        {
            id: 5,
            image: product_two,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            old_price: "$351.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },
    ],

    gift_ideas: [
        {
            id: 0,
            image: product_four,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },

        {
            id: 1,
            image: product_four,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },

        // {
        //     id: 2,
        //     image: product_four,
        //     category: "Digital Camera",
        //     name: "Sony - Alpha a5100 Mirrorless Camera",
        //     price: "$499.99",
        //     stars: 3,
        //     reviews: [
        //         " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
        //         "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
        //     ],
        // },

        // {
        //     id: 3,
        //     image: product_four,
        //     category: "Digital Camera",
        //     name: "Sony - Alpha a5100 Mirrorless Camera",
        //     price: "$499.99",
        //     stars: 3,
        //     reviews: [
        //         " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
        //         "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
        //     ],
        // },
    ],
};

interface ITProducts {
    all: IProduct[];
    household: IProduct[];
    computers: IProduct[];
    phones: IProduct[];
    gaming: IProduct[];
    watches: IProduct[];
}

export const TProductsArr: ITProducts = {
    all: [
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
        {
            id: 7,
            image: product_four,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },
        {
            id: 4,
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
        {
            id: 6,
            image: product_two,
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
    household: [
        {
            id: 0,
            image: product_two,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },
        {
            id: 7,
            image: product_four,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },
        {
            id: 3,
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
        {
            id: 4,
            image: product_four,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },
        {
            id: 2,
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
    computers: [
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
        {
            id: 7,
            image: product_four,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },
        {
            id: 1,
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
        {
            id: 9,
            image: product_two,
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

    phones: [
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
        {
            id: 7,
            image: product_four,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },
        {
            id: 3,
            image: product_two,
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
    gaming: [
        {
            id: 0,
            image: product_two,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },
        {
            id: 7,
            image: product_four,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },
        {
            id: 5,
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
        {
            id: 6,
            image: product_four,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },
        {
            id: 1,
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
    watches: [
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
        {
            id: 7,
            image: product_four,
            category: "Digital Camera",
            name: "Sony - Alpha a5100 Mirrorless Camera",
            price: "$499.99",
            stars: 3,
            reviews: [
                " Lipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!",
                "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!",
            ],
        },
        {
            id: 9,
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
        {
            id: 6,
            image: product_two,
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
