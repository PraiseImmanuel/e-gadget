import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import { MobileNav } from "./UI/nav/MobileNav";
import PageWrapper from "./UI/PageWrapper";
function App() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <MobileNav />
            <PageWrapper />
        </React.Fragment>
    );
}

export default App;
