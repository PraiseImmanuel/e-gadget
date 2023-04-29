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
            heading: "Usefull Links",
            listItems: [
                { text: "About e-gadgets", hRef: "about.com" },
                { text: "Our Services", hRef: "about.com" },
                { text: "How to shop", hRef: "about.com" },
                { text: "FAQ", hRef: "about.com" },
                { text: "Contact Us", hRef: "about.com" },
            ],
        },

        {
            heading: "Customer Service",
            listItems: [
                { text: "Payment Methods", hRef: "ser.com" },
                { text: "Money-back guarantee!", hRef: "ser.com" },
                { text: "Returns", hRef: "ser.com" },
                { text: "Shipping", hRef: "ser.com" },
                { text: "Terms and conditions", hRef: "ser.com" },
                { text: "Privacy Policy", hRef: "ser.com" },
            ],
        },
        {
            heading: "My Account",
            listItems: [
                { text: "Sign In", hRef: "ser.com" },
                { text: "View Cart", hRef: "ser.com" },
                { text: "My Wishlist", hRef: "ser.com" },
                { text: "Track My Order", hRef: "ser.com" },
                { text: "Help", hRef: "ser.com" },
            ],
        },
    ],
};
