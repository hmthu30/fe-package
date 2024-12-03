import React, { createContext, useContext } from "react";
export function createContextMutation(mutation) {
    const Context = createContext(null);
    function Provider({ children }) {
        return React.createElement(Context.Provider, { value: mutation() }, children);
    }
    function useProviderMutation() {
        const mutation = useContext(Context);
        if (!mutation) {
            throw new Error("useProviderMutation must be used within a MutationProvider");
        }
        return mutation;
    }
    return [Provider, useProviderMutation];
}
