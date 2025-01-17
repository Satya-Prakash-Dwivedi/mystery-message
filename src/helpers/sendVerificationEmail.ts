import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail( // Sending emails are always async because it take time
    username : string,
    email : string,
    verifyCode : string
) : Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Mystery Message | Verification Code',
            react : VerificationEmail({username, otp : verifyCode}),
        });
        return{success : true, message : 'Email send successfully'}

    } catch (emailError) {
        console.log("Error sending email ", emailError);
        return {success : false, message : 'Failed to send verification email'}
    }
}
