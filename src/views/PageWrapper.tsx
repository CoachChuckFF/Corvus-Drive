import React, { ReactNode } from "react";
import { View } from "react-xnft";

export interface PageWrapperProps {
    children: ReactNode;
}

export function PageWrapper(props: PageWrapperProps) {
    const { children } = props;
    return <View>{children}</View>;
}
