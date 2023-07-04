import rocket from "../../../images/rocket-solid.svg";
import rotate from "../../../images/arrows-rotate-solid.svg";
import warning from "../../../images/warning-solid.svg";
import ring from "../../../images/ring-solid.svg";

interface IOffer {
    id: number;
    svg: string;
    heading: string;
    text: string;
}

export const serviceOffferArr: IOffer[] = [
    {
        id: 0,
        svg: rocket,
        heading: "Free Shipping",
        text: "Orders $50 or more",
    },

    { id: 1, svg: rotate, heading: "Free Returns", text: "Within 30 days" },

    {
        id: 2,
        svg: warning,
        heading: "Get 20% Off Item",
        text: "When you sign up",
    },
    {
        id: 3,
        svg: ring,
        heading: "We Support",
        text: "24/7 amazing services",
    },
];
