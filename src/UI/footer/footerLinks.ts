interface ListItems {
    text: string;
    hRef: string;
}

interface Link {
    heading: string;
    listItems: ListItems[];
}

interface Links {
    links: Link[];
}

export const NewLinks: Links = {
    links: [
        {
            heading: "Useful Links",
            listItems: [
                {
                    text: "About e-gadgets",
                    hRef: "https://github.com/PraiseImmanuel",
                },
                {
                    text: "Our Services",
                    hRef: "https://github.com/PraiseImmanuel",
                },
                {
                    text: "How to shop",
                    hRef: "https://github.com/PraiseImmanuel",
                },
                { text: "FAQ", hRef: "https://github.com/PraiseImmanuel" },
                {
                    text: "Contact Us",
                    hRef: "https://github.com/PraiseImmanuel",
                },
            ],
        },

        {
            heading: "Customer Service",
            listItems: [
                {
                    text: "Payment Methods",
                    hRef: "https://github.com/PraiseImmanuel",
                },
                {
                    text: "Money-back guarantee!",
                    hRef: "https://github.com/PraiseImmanuel",
                },
                { text: "Returns", hRef: "https://github.com/PraiseImmanuel" },
                { text: "Shipping", hRef: "https://github.com/PraiseImmanuel" },
                {
                    text: "Terms and conditions",
                    hRef: "https://github.com/PraiseImmanuel",
                },
                {
                    text: "Privacy Policy",
                    hRef: "https://github.com/PraiseImmanuel",
                },
            ],
        },
        {
            heading: "My Account",
            listItems: [
                { text: "Sign In", hRef: "https://github.com/PraiseImmanuel" },
                {
                    text: "View Cart",
                    hRef: "https://github.com/PraiseImmanuel",
                },
                {
                    text: "My Wishlist",
                    hRef: "https://github.com/PraiseImmanuel",
                },
                {
                    text: "Track My Order",
                    hRef: "https://github.com/PraiseImmanuel",
                },
                { text: "Help", hRef: "https://github.com/PraiseImmanuel" },
            ],
        },
    ],
};
