import React, { ReactNode } from "react";
import { View, Text } from "react-xnft";
import {
    CORVUS_BLACK,
    CORVUS_GREY,
    CORVUS_GREY_BRIGHT,
    CORVUS_TEXT_COLOR,
} from "../models/colors";
import { CORVUS_HEADER_FOOTER_Z_INDEX } from "../models/z-indexs";

export interface AppWrapperProps {
    children: ReactNode;
}

export function CorvusHeader() {
    return (
        <View
            style={{
                height: "56px",
                borderTop: `1px solid ${CORVUS_GREY_BRIGHT}`,
                width: "100%",
                position: "absolute",
                top: "0px",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                paddingLeft: "10px",
                backgroundColor: CORVUS_GREY,
                zIndex: CORVUS_HEADER_FOOTER_Z_INDEX,
            }}
        >
            <Text>{"Corvus 0.1"}</Text>
        </View>
    );
}

export function DroniesFooter() {
    return (
        <View
            style={{
                height: "40px",
                borderTop: `1px solid ${CORVUS_GREY_BRIGHT}`,
                width: "100%",
                position: "absolute",
                bottom: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: CORVUS_GREY,
                textAlign: "center",
                zIndex: CORVUS_HEADER_FOOTER_Z_INDEX,
            }}
        >
            <Text>{"From Dronies ->"}</Text>
        </View>
    );
}

export function AppWrapper(props: AppWrapperProps) {
    const { children } = props;
    return (
        <View
            style={{
                height: "100%",
                backgroundColor: CORVUS_BLACK,
                width: "100%",
                color: CORVUS_TEXT_COLOR,
            }}
        >
            <CorvusHeader />

            {children}
            <DroniesFooter />
        </View>
    );
}
