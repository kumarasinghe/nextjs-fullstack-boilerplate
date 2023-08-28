"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/app/store";

type ProviderProps = {
    children: React.ReactNode;
};

function Providers(props: ProviderProps) {
    const { children } = props;

    return <ReduxProvider store={store}>{children}</ReduxProvider>;
}

export default Providers;
