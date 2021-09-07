export interface IRowProps {
    id: number,
    company_name: string,
    budget: number,
    budget_spent: number,
    date_of_contract_sign: string,
    budget_left: number
}

export interface IColumnProps {
    id: 'id' | 'company_name' | 'budget' | 'budget_spent' | 'date_of_contract_sign' | 'budget_left',
    label: string,
    minWidth: number
    align?: 'right' | 'left' | 'center'
}

