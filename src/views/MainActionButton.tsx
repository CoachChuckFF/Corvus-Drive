import React, { ReactNode } from "react";
import { View, Text, Button } from "react-xnft";
import {
    CORVUS_BLACK,
    CORVUS_GREEN,
    CORVUS_GREY,
    CORVUS_GREY_BRIGHT,
    CORVUS_TEXT_COLOR,
} from "../models/colors";
import { CORVUS_HEADER_FOOTER_Z_INDEX } from "../models/z-indexs";

export interface MainActionButtonProps {
    text: string;
    isLoading: boolean;
    onClick: () => void;
}

export function MainActionButton(props: MainActionButtonProps) {
    const { text, isLoading, onClick } = props;

    return (
        <View
            style={{
                position: "absolute",
                bottom: "64px",
                width: "100%",
                display: "flex",
            }}
        >
            <Button
                onClick={onClick}
                disabled={isLoading}
                style={{
                    backgroundColor: CORVUS_GREEN,
                    color: CORVUS_GREY,
                    width: "343px",
                    margin: "auto",
                }}
            >
                {text}
            </Button>
        </View>
    );
}
