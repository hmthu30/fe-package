import React, { PropsWithChildren } from "react";
import { StoreApi } from "zustand";
export declare function createContextStore<TStore, TProps>(createStoreFn: (props: TProps) => StoreApi<TStore>): readonly [({ children, ...props }: PropsWithChildren<TProps & Record<string, unknown>>) => React.JSX.Element, <T>(selector: (state: TStore) => T) => T];
