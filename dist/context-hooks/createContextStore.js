import React, { createContext, useContext, useRef, } from "react";
import { useStore } from "zustand";
export function createContextStore(createStoreFn) {
    const StoreContext = createContext(undefined);
    function Provider({ children, ...props }) {
        const storeRef = useRef();
        if (!storeRef.current) {
            storeRef.current = createStoreFn(props);
        }
        return (React.createElement(StoreContext.Provider, { value: storeRef.current }, children));
    }
    function useProviderStore(selector) {
        const store = useContext(StoreContext);
        if (!store) {
            throw new Error(`useProviderStore must be used within the StoreProvider`);
        }
        return useStore(store, selector);
    }
    return [Provider, useProviderStore];
}
