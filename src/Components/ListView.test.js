import React from 'react'
import { render, screen } from '@testing-library/react'
import ListView from './ListView'
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
                "budget_left": 63000,
                "date_of_contract_sign": "2021-01-04"
            },
            {
                "id": 1246,
                "company_name": "Apple",
                "budget": 110000,
                "budget_spent": 32000,
                "budget_left": 78000,
                "date_of_contract_sign": "2021-03-05"
            }
        ],
        "loading": false,
        "modalData": {
            "openModal": false,
            "selectedRow": {},
            "selectedRowIndex": -1
        }
    }

    return render(
        <Context.Provider value={{ state: initialState }}><ListView /></Context.Provider>
    )
}


test('List view shows the data in proper sequence', () => {
    const expectations = ["Tesla", "63000", "125000", "62000", "2021-01-04"];
    customRender()
    const rowId = screen.getByTestId("Tesla");
    rowId.childNodes.forEach((node) => {
        if (node.id === '1245-company_name') {
            expect(node.textContent).toBe(expectations[0]);
        } else if (node.id === '1245-budget_left') {
            expect(node.textContent).toBe(expectations[1]);
        } else if (node.id === '1245-budget') {
            expect(node.textContent).toBe(expectations[2]);
        } else if (node.id === '1245-budget_spent') {
            expect(node.textContent).toBe(expectations[3]);
        } else if (node.id === '1245-date_of_contract_sign') {
            expect(node.textContent).toBe(expectations[4]);
        }

    });
})