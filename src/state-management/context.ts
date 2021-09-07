import React from "react"
import { generateInitialState } from "../Utils/Constants"
import { tActions } from "./actions"
import { IRowProps } from "../Utils/model"

export interface IClientState {
    loading: boolean,
    list: IRowProps[],
    modalData: {
        openModal: boolean,
        selectedRow: IRowProps,
        selectedRowIndex: number
    }
}
export interface IContext {
    state: IClientState
    dispatch: React.Dispatch<tActions>
}

export const initialState: IContext = {
    state: generateInitialState(),
    dispatch: () => { }
}

export const Context = React.createContext<IContext>(initialState)