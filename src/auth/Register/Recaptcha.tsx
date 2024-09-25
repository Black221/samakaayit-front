import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha"
const ReCaptChaKEY = import.meta.env.VITE_RECAPTCHA_KEY_CLIENT;



export default function Recaptcha ({
    onVerify
} : {
    onVerify: (token: string) => void
}) {

    const [captchaError, setCaptchaError] = useState<string | null>(null);

    const onChange = (token: string | null) => {
        if (token) {
            setCaptchaError(null); // Clear any previous errors
            onVerify(token);
        } else {
            setCaptchaError("Veuillez cocher la case 'Je ne suis pas un robot'");
        }
    };

   

    return (<>
        <ReCAPTCHA sitekey={ReCaptChaKEY} onChange={onChange} />
        {captchaError && <p className="text-red-500 text-sm">{captchaError}</p>}
    </>)
}