import { Metadata } from "next";
import ConfirmAccountForm from "@/components/auth/ConfirmAccountForm";

export const metadata: Metadata = {
  title: 'CashTrackr - Confirma tu Cuenta',
  description: 'Confirma tu cuenta en CashTrackr'
}

export default function ConfirmAccountPage() {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">Confirma tu cuenta</h1>
      <p className="text-3xl font-bold">Ingresa el código que recibiste <span className="text-amber-500">por email</span></p>

      <ConfirmAccountForm />
    </>
  )
}
