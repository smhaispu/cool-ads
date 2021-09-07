import { IClientState } from '../state-management/context';
import { IColumnProps } from './model'
export const columns: IColumnProps[] = [
    { id: 'company_name', label: 'Name', minWidth: 170 },
    { id: 'budget', label: 'Budget', minWidth: 100 },
    {
        id: 'budget_spent',
        label: 'Budget Spent',
        minWidth: 100
    },
    {
        id: 'budget_left',
        label: 'Budget Left',
        minWidth: 100
    },
    {
        id: 'date_of_contract_sign',
        label: 'Date',
        minWidth: 170
    }
];



export const generateInitialState = (): IClientState => {
    const initialState = localStorage.getItem('persistantState') && JSON.parse(localStorage.getItem('persistantState') || '') || {
        loading: true,
        list: [],
        modalData: {
            openModal: false,
            selectedRow: {},
            selectedRowIndex: -1
        }
    }
    return initialState
}