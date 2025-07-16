import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

export default function Modal({ children, onClose }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Trigger fade-in after mount
        setTimeout(() => setOpen(true), 10);
    }, []);

    const handleClose = () => {
        // Trigger fade-out
        setOpen(false);
        // Wait transition duration before unmounting
        setTimeout(onClose, 500);
    };

    return ReactDOM.createPortal(
        <div className={`modal_overlay ${open ? 'open' : ''}`} onClick={handleClose}>
            <div className={`modal_content ${open ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
                <button className="modal_close" onClick={handleClose}>✕</button>
                {children}
            </div>
        </div>,
        document.body
    );
}
