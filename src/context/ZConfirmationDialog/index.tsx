import {
    createContext,
    forwardRef,
    ReactElement,
    Ref,
    useState,
} from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import { ZConfirmationDialogPropsType } from '@/types';

import { PropsType, ZConfirmationDialogContextType } from './types';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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
                TransitionComponent={Transition}
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
