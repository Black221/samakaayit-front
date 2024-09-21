import { createContext, ReactNode, useState } from "react";



export const ModalContext = createContext<ModalProps>({} as ModalProps);


interface ModalProps {
    modalElement: React.ReactNode | null;
    setModalElement: (element: React.ReactNode | null) => void;
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
    onClose: () => void;
    openModal: (element: React.ReactNode) => void;
    closeModal: () => void;
}


export const ModalProvider = ({ children } : { children: ReactNode}) => {

    const [modalElement, setModalElement] = useState<React.ReactNode | null>(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const openModal = (element: React.ReactNode) => {
        setModalElement(element);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalElement(null);
        setModalOpen(false);
    }

    const onClose = () => {
        setModalOpen(false);
        setModalElement(null);
    }

    return (
        <ModalContext.Provider value={{
            modalElement,
            setModalElement,
            modalOpen,
            setModalOpen,
            onClose,
            openModal,
            closeModal
        }}>
            {children}
        </ModalContext.Provider>
    );
};