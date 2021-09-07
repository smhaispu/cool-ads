import { IRowProps } from '../Utils/model';

interface ISetState {
    readonly type: 'SET_STATE'
    payload: IRowProps[]
}

interface ISetModalSelection {
    readonly type: 'SET_MODAL_STATE'
    payload: {
        selectedRow: IRowProps,
        selectedRowIndex: number,
        openModal: boolean
    }
}

interface ISetBudgetValue {
    readonly type: 'SET_BUDGET_VALUE'
    payload: number
}

interface IResetSelection {
    readonly type: 'RESET_SELECTION'
}

interface ISetLoading {
    readonly type: 'SET_LOADING',
    payload: boolean
}


export type tActions =
    | ISetState
    | ISetModalSelection
    | IResetSelection
    | ISetLoading
    | ISetBudgetValue