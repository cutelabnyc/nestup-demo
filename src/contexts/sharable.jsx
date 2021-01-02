import React, { createContext, useReducer } from "react";
import { sharableReducer, makeInititalSharableState } from "../reducers/sharable";

export const SharableContext = createContext(null);

export const SharableProvider = (({ children }) => {

    const [state, dispatch] = useReducer(sharableReducer, makeInititalSharableState(4));

    return <SharableContext.Provider value={{ state, dispatch }} >
        { children }
    </SharableContext.Provider>;
});