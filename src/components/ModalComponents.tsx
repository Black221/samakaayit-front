import { useRef } from "react";


export function ModalContainer ({
    children,
    open,
    onClose,
} : {
    children: any;
    open: boolean;
    onClose: (ref:any, e: any) => void;
}) {

    const ref = useRef<any>(null);

    return (<>
        <div className={`fixed inset-0 z-50 ${open ? 'block' : 'hidden'}`} 
            onClick={(e) => onClose(ref, e)}
        >
            <div className="fixed inset-0 bg-black bg-opacity-50"></div>
            <div className="fixed inset-0 mx-auto mt-8  rounded-lg bg-white h-fit min-w-[600px] max-w-[800px] shadow-lg"
                ref={ref}
            >
                {children}
            </div>
        </div>
    </>)
}


export  function ModalHead ({
    children,
} : {
    children: any;
}) {
    return (<>
        <h2 className="text-3xl font-semibold border-b px-8 p-4">
            {children}
        </h2>
    </>)
}

export function ModalBody ({
    children,
} : {
    children: any;
}) {
    return (<>
        <div className="flex-1 min-h-96 max-h-[460px] overflow-auto p-6">
            {children}
        </div>
    </>)
}

export function ModalFooter ({
    children,
} : {
    children: any;
}) {
    return (<>
        <div className="flex items-center justify-between px-8 py-4 border-t">
            {children}
        </div>
    </>)
}