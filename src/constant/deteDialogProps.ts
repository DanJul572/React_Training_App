import translator from '@/helpers/translator';

import { ZConfirmationDialogPropsType } from '@/types';

const deleteDialogProps: ZConfirmationDialogPropsType = {
    cancelButton: translator('cancel'),
    confirmButton: translator('delete'),
    content: translator('delete_dialog_content'),
    onConfirm: () => {},
    open: false,
    title: translator('delete_dialog_title'),
};

export default deleteDialogProps;
