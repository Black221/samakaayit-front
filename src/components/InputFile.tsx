import { useState, useRef, ChangeEvent } from "react";
import { IDocument } from "../models/Document";

interface Props {
    previews: boolean;
    accept: string;
    onChoose: (file: any) => void;
}

export default function InputFile({
    accept,
    previews,
    onChoose,
}: Props ) {

    const [imageFile, setImageFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const convertToBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file); // Converts the file to a Base64 string
        });
    };
  
    const updateImage =  async (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const base64File = await convertToBase64(file);
            setImageFile(file);
            
            const d: Partial<IDocument> = {
                originalname: file.name,
                mimetype: file.type,
                size: file.size,
            }
            onChoose({
                ...d,
                base64: base64File
            });
        }
    };

    return (<>

       <div className="flex gap-4">
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <p className="mb-2 text-lg text-primary-800 text-center">
                            {
                                imageFile 
                                ? (<>
                                    <p className="mb-2">
                                        Nom: {imageFile.name}
                                    </p>
                                    <p className="mb-2">
                                        Taille: {Math.round(imageFile.size / 1024)} Ko
                                        <p className="text-xs text-red-500">
                                            {
                                                imageFile.size > (1024 * 1024) / 4 && "La taille du fichier est supérieure à 250Ko"
                                            }
                                        </p>
                                    </p>
                                </>)
                                : "Aucun fichier sélectionné"
                            }
                        </p>
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Glissez et déposez</span> votre fichier ici</p>
                        <p className="text-xs text-gray-500">Pdf (max 10Mo)</p>
                    </div>
                    <input 
                        id="dropzone-file" 
                        type="file" 
                        className="hidden" 
                        ref={fileInputRef}
                        accept={accept}
                        onChange={updateImage}
                    />
                </label>
            </div>
            {/* preview */}
            {previews && <div>
                {imageFile && <img
                    src={URL.createObjectURL(imageFile)}
                    alt="Uploaded"
                    className="w-32 h-32 border border-gray-300 rounded-lg"
                />}
            </div>}
       </div>
                
    </>)
}
