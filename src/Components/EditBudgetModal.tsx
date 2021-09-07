import React, { useContext, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Context } from '../state-management/context';
import Alert from '@material-ui/lab/Alert';
import {ModalHeaderStyles} from './EditBudgetModal.style'

export default function EditBudgetModal() {
  const { state, dispatch } = useContext(Context);
  const { openModal, selectedRow, selectedRowIndex } = state.modalData;
  const [value, setValue] = useState(selectedRow.budget);
  const [alert, setAlert] = useState(false);
   const classes = ModalHeaderStyles()
  useEffect(() => {
    if (openModal) {
      setValue(selectedRow.budget);
    }
  }, [openModal])

  useEffect(() => {
    if (value < selectedRow.budget_spent) {
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, [value])

  const handleClose = () => {
    dispatch({ type:'SET_MODAL_STATE',payload:{
          openModal: false,
          selectedRow: {
            id: -1,
            company_name: '',
            budget: 0,
            budget_spent: 0,
            date_of_contract_sign: '',
            budget_left:0
          },
          selectedRowIndex: -1
      } 
    });
  };

  const handleSubmit = () => {
    const rowList = [...state.list];
    rowList[selectedRowIndex].budget = value;
    dispatch({'type':'SET_STATE',payload:rowList});
    dispatch({ type:'SET_MODAL_STATE',payload:{
            openModal: false,
            selectedRow: {
              id: -1,
              company_name: '',
              budget: 0,
              budget_spent: 0,
              date_of_contract_sign: '',
              budget_left:0
            },
            selectedRowIndex: -1
        } 
  });
  }

  return (
    <div>

      <Dialog data-testid="modal-root" open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className={classes.root}>{selectedRow.company_name}</DialogTitle>
        <DialogContent>
          <DialogContentText data-testid="modal-header">
            Your total budget spent is {selectedRow.budget_spent}.Please enter your Budget accordingly.
          </DialogContentText>
          <TextField
            data-testid="modal-input"
            autoFocus
            margin="dense"
            id="budget"
            label="Budget"
            type="number"
            value={value}
            onChange={(e:any) => setValue(e.target.value)}
          />
          {alert && <Alert severity="error" color="error" style={{ marginTop: '10px' }}>
            Your total budget cannot be less than budget spent!
    </Alert>}
        </DialogContent>
        <DialogActions>
        <Button disabled={!value || alert} onClick={handleSubmit} className={(!value || alert) ? classes.buttonPrimaryDisabled:  classes.buttonPrimary}>
            Submit
          </Button>
          <Button onClick={handleClose} className={classes.buttonSecondary}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
