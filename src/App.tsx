import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./UI/header/Header";
import { MobileNav } from "./UI/nav/MobileNav";

function App() {
    return (
        <React.Fragment>
            <MobileNav />
            <React.Fragment>
                <GlobalStyles />
                <Header />
            </React.Fragment>
        </React.Fragment>
    );
}

export default App;
