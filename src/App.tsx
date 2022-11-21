import React from "react";
import ReactXnft, { Text } from "react-xnft";
import { useCovusState } from "./controllers/app-state";
import { AppWrapper } from "./views/AppWrapper";
import { MainActionButton } from "./views/MainActionButton";
import { PageWrapper } from "./views/PageWrapper";

//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
    console.log("Hi mom!");
});

export function App() {
    const { message } = useCovusState();

    return (
        <AppWrapper>
            <PageWrapper>
                <MainActionButton
                    text="Let's Go"
                    onClick={() => {}}
                    isLoading={false}
                />
            </PageWrapper>
        </AppWrapper>
    );
}
