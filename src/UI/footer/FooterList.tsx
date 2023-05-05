import React from "react";
import styled from "styled-components";

interface ListItems {
    text: string;
    hRef: string;
}

interface Link {
    heading: string;
    listItems: ListItems[];
}

interface Props {
    link: Link;
}

const FooterList: React.FC<Props> = ({ link }: Props) => {
    const heading = link.heading;
    const listItems = link.listItems;

    return (
        <ListContainer>
            <ListHeading>{heading}</ListHeading>
            <List>
                {listItems?.map((item) => (
                    <ListItem key={item.text}>
                        <A href={item.hRef}>{item.text}</A>
                    </ListItem>
                ))}
            </List>
        </ListContainer>
    );
};

export default FooterList;

const ListContainer = styled.div`
    margin-bottom: 5rem;
`;

const ListHeading = styled.h3`
    color: #333333;
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 2rem;
`;

const List = styled.ul`
    list-style-type: none;
`;

const ListItem = styled.li`
    margin-bottom: 0.64rem;
`;

const A = styled.a`
    color: #777;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 300;
    position: relative;
    width: fit-content;
    &::after {
        align-self: center;
        background-color: #fcb941;
        bottom: -0.5rem;
        content: "";
        display: block;
        height: 0.1rem;
        position: absolute;
        transition: width ease-in 0.3s;
        width: 0;
    }

    &:hover {
        &::after {
            width: 100%;
        }
    }
`;
