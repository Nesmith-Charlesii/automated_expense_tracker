import { unsealData } from "iron-session";
import { cookies } from 'next/headers';

export default async function Transaction_History() {
    
    const cookieStore = cookies();
    const encryptedSession = cookieStore.get("access_token")?.value;
   
    const session = encryptedSession ?
    await unsealData(encryptedSession, {
        password: 'ioaifaifjioajewifeawfoajnifjnewfaewnnawonfianvnawrifnweofn'
    })
    : null;

    console.log("TOKEN", session)

    return (
        <div>
            You're In!
        </div>
    )
}