import { createContext, useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { ZConfirmationDialogPropsType } from '@/types';

import { PropsType, ZConfirmationDialogContextType } from './types';

const defaultPropsValue: ZConfirmationDialogPropsType = {
    cancelButton: '',
    confirmButton: '',
    content: '',
    onConfirm: () => {},
    open: false,
    title: '',
};

const ZConfirmationDialogContext =
    createContext<ZConfirmationDialogContextType>({
        dialogProps: defaultPropsValue,
        setDialogProps: () => {},
    });

const ZConfirmationDialog = (props: PropsType) => {
    const [dialogProps, setDialogProps] =
        useState<ZConfirmationDialogPropsType>(defaultPropsValue);

    const handleClose = () => {
        setDialogProps((prevState) => ({
            ...prevState,
            open: false,
        }));
    };

    return (
        <ZConfirmationDialogContext.Provider
            value={{ dialogProps, setDialogProps }}
        >
            <Dialog
                aria-describedby="alert-dialog-slide-description"
                keepMounted
                onClose={handleClose}
                open={dialogProps.open}
            >
                <DialogTitle>{dialogProps.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {dialogProps.content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        {dialogProps.cancelButton}
                    </Button>
                    <Button onClick={dialogProps.onConfirm}>
                        {dialogProps.confirmButton}
                    </Button>
                </DialogActions>
            </Dialog>
            {props.children}
        </ZConfirmationDialogContext.Provider>
    );
};

export { ZConfirmationDialog, ZConfirmationDialogContext };
