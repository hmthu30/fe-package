import React, { PropsWithChildren } from "react";
import { UseMutationResult } from "react-query";
export declare function createContextMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(mutation: () => UseMutationResult<TData, TError, TVariables, TContext>): readonly [({ children }: PropsWithChildren) => React.JSX.Element, () => UseMutationResult<TData, TError, TVariables, TContext>];
