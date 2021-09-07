import { tActions } from "./actions"
import { IClientState } from "./context"

export const Reducer = (state: IClientState, action: tActions): IClientState => {
    switch (action.type) {
        case 'SET_STATE':
            return {
                ...state,
                list: action.payload
            }

        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            }


        case 'SET_BUDGET_VALUE':
            return {
                ...state

            }

        case 'SET_MODAL_STATE':
            return {
                ...state,
                modalData: action.payload
            }

        default:
            return state;

    }
}