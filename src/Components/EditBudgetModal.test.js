import React from 'react'
import { render, screen } from '@testing-library/react'
import EditBudgetModal from './EditBudgetModal'
import { Context } from '../state-management/context'

const customRender = () => {
    const localState = localStorage.getItem('persistantState') && JSON.parse(localStorage.getItem('persistantState'));
    const initialState = localState || {
        "list": [
            {
                "id": 1245,
                "company_name": "Tesla",
                "budget": 125000,
                "budget_spent": 62000,
                "date_of_contract_sign": "2021-01-04"
            },
            {
                "id": 1246,
                "company_name": "Apple",
                "budget": 110000,
                "budget_spent": 32000,
                "date_of_contract_sign": "2021-03-05"
            }
        ],
        "loading": false,
        "modalData": {
            "openModal": true,
            "selectedRow": {
                "id": 1245,
                "company_name": "Tesla",
                "budget": 125000,
                "budget_spent": 62000,
                "date_of_contract_sign": "2021-01-04"
            },
            "selectedRowIndex": 0
        }
    }

    return render(
        <Context.Provider value={{ state: initialState }}><EditBudgetModal /></Context.Provider>
    )
}
test('Modal Renders', () => {
    customRender()
    const modalHeaderData = screen.getByTestId("modal-root");
    expect(modalHeaderData).toBeInTheDocument();
})

test('modal shows the header with budget spent', () => {
    const budgetSpent = "Your total budget spent is 62000.Please enter your Budget accordingly.";
    customRender()
    const modalHeaderData = screen.getByTestId("modal-header");
    expect(modalHeaderData.textContent).toContain(budgetSpent);
})

test('modal shows the input field with budget prefilled', () => {
    const budgetSpent = 125000;
    customRender()
    const modalInputValue = screen.getByLabelText("Budget");
    expect(modalInputValue).toHaveValue(budgetSpent);
})