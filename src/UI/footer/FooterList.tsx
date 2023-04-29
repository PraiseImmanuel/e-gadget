import React from "react";
import styled from "styled-components";
import { MaxWidthContainer } from "../../components/MaxWidthContainer";

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
        <MaxWidthContainer>
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
        </MaxWidthContainer>
    );
};

export default FooterList;

const ListContainer = styled.div``;

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
    font-size: 1.5rem;
    font-weight: 400;
`;
