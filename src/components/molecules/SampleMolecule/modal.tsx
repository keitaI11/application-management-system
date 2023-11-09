import React, { ReactNode, FC, MouseEvent } from 'react';
import Button from '../../atoms/SampleAtom/button';
import '../../../styles/modal.css'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    // モーダル外をクリックした際、モーダルを閉じる処理
    const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
            onClose();
        }
    };
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Modal;
