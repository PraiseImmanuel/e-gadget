import React, { useState } from "react";
import styled from "styled-components";
import Filter from "./Filter";

const Filters: React.FC = () => {
    const [dropFilters, setDropFilters] = useState<boolean>(false);

    return (
        <div>
            <DisplayFilter>
                <h3>Filter</h3>
                <ToggleDisplay onClick={() => setDropFilters(!dropFilters)}>
                    <ArrowsSvg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.25rem"
                        width="1.25rem"
                        viewBox="0 0 320 512"
                    >
                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                    </ArrowsSvg>
                </ToggleDisplay>
            </DisplayFilter>

            <FilterWrapper dropFilters={dropFilters}>
                <Head>
                    <HeadP>Filters:</HeadP>
                    <HeadButton>Clean All</HeadButton>
                </Head>
                <div>
                    <Filter heading="Brands" arrNum={0} />
                    <Filter heading="Price" arrNum={1} />
                    <Filter heading="Reviews" arrNum={2} />
                </div>
            </FilterWrapper>
        </div>
    );
};

export default Filters;

const DisplayFilter = styled.div`
    align-items: center;
    background-color: #fcbb41bc;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding: 0 1.5rem;
    @media screen and (min-width: 990px) {
        display: none;
    }
`;

const ToggleDisplay = styled.div``;

const FilterWrapper = styled.div<{ dropFilters: boolean }>`
    @media screen and (max-width: 990px) {
        display: ${(props) => (props.dropFilters ? "none" : "block")};
    }
`;

const Head = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;

const HeadP = styled.p``;

const HeadButton = styled.button`
    font-size: 1.45rem;
`;

const ArrowsSvg = styled.svg``;
