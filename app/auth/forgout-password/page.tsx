import { Metadata } from "next";
import Link from "next/link";
import ForgotPasswordForm from "@/components/auth/ForgoutPasswordForm";

export const metadata: Metadata = {
  title: 'CashTrackr - Recuperar Contraseña',
  description: 'Recupera tu contraseña en CashTrackr'
}

export default function ForgoutPasswordPage() {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">¿Olvidaste tu Contraseña?</h1>
      <p className="text-3xl font-bold">aquí puedes <span className="text-amber-500">reestablecerla</span></p>

      <ForgotPasswordForm />

      <nav className="mt-10 flex flex-col space-y-4">
        <Link
          href='/auth/login'
          className="text-center text-gray-500"
        >
          ¿Ya tienes cuenta? Incia Sesión
        </Link>
        <Link
          href='/auth/register'
          className="text-center text-gray-500"
        >
          ¿No tienes una cuenta? Registrate
        </Link>
      </nav>
    </>
  )
}
