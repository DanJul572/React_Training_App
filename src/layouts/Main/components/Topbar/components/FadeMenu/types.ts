type CloseReason = 'backdropClick' | 'escapeKeyDown';

export type OnCloseType = (event?: object, reason?: CloseReason) => void;
