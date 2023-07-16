import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const FiltersArr = [
    {
        labels: ["All", "Apple", "Hewlet Packard(HP)", "Hisense"],
    },
    {
        labels: ["All", "Apple", "Hewlet Packard(HP)", "Hisense"],
    },
    {
        labels: ["All", "Apple", "Hewlet Packard(HP)", "Hisense"],
    },
];

interface Props {
    heading: string;
    arrNum: number;
}

const Filter: React.FC<Props> = ({ heading, arrNum }) => {
    const [showFilter, setShowFilter] = useState<boolean>(false);
    return (
        <div>
            <FilterWraper onClick={() => setShowFilter(!showFilter)}>
                <h3>{heading}</h3>
                <Arrows>
                    <ArrowsSvg
                        xmlns="http://www.w3.org/2000/svg"
                        height="2rem"
                        width="2rem"
                        viewBox="0 0 320 512"
                        fill="#fcb941"
                    >
                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                    </ArrowsSvg>
                </Arrows>
            </FilterWraper>
            <AnimatePresence>
                {showFilter && (
                    <FilterItems>
                        <form>
                            {FiltersArr[arrNum].labels.map((item) => (
                                <FilterItem key={item}>
                                    <Label>
                                        <Input type="checkbox" />
                                        {item}
                                    </Label>
                                </FilterItem>
                            ))}
                        </form>
                    </FilterItems>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Filter;

const FilterWraper = styled.div`
    align-items: center;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;
    & > h3 {
        font-weight: 400;
    }
`;

const Arrows = styled.div`
    margin-right: 2rem;
`;

const ArrowsSvg = styled.svg``;

const FilterItems = styled.div``;

const FilterItem = styled.div``;

const Label = styled.label`
    margin-left: 1rem;
`;

const Input = styled.input`
    margin-right: 2rem;
`;
