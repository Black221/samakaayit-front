import { useState, ReactNode } from "react";

interface Props {
    id?: string;
    label: string;
    type?: string;
    icon?: ReactNode;
    placeholder?: string;
    onChange: (value: string) => void;
    className?: string;
    textAlign?: string; // Ajoutez une prop pour le padding-left
}

export default function Input(
    { id, label, onChange, type, icon, placeholder, className, textAlign = "text-normal" }: Props
) {

    const [value, setValue] = useState<string | number>("");

    const getValue = (value: string) => {
        setValue(value);
        onChange(value);
    }

    return (
        <div className={`w-full flex flex-col space-y-1 ${className}`}>
            <label htmlFor={id}>{label}</label>
            <div className="relative">
                {icon && (
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className={`border border-none bg-[#F2F2F2] p-2 rounded-md pl-8 ${textAlign} w-full outline-none`} // Utilisez la prop paddingLeft ici
                    value={value}
                    onChange={(e) => getValue(e.target.value)}
                    autoComplete={
                        type === "password" ? "current-password" : "off"
                    }
                />
            </div>
        </div>
    )
}
