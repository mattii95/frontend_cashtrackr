'use client'

import { useActionState, useEffect } from "react"
import { resetPassword } from "@/actions/reset-password-action"
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

export default function ResetPasswordForm({ token }: { token: string }) {

  const resetPasswordBind = resetPassword.bind(null, token);
  const [state, dispatch] = useActionState(resetPasswordBind, {
    errors: [],
    success: ''
  })

  useEffect(() => {
    if (state.errors) {
      state.errors.forEach(error => {
        toast.error(error);
      });
    }
    if (state.success) {
      toast.success(state.success);
      redirect('/auth/login');
    }
  }, [state])

  return (
    <form
      action={dispatch}
      className=" mt-14 space-y-5"
      noValidate
    >
      <div className="flex flex-col gap-5">
        <label
          className="font-bold text-2xl"
        >Password</label>

        <input
          type="password"
          placeholder="Password de Registro"
          className="w-full border border-gray-300 p-3 rounded-lg"
          name="password"
        />
      </div>

      <div className="flex flex-col gap-5">
        <label
          className="font-bold text-2xl"
        >Repetir Password</label>

        <input
          id="password_confirmation"
          type="password"
          placeholder="Repite Password de Registro"
          className="w-full border border-gray-300 p-3 rounded-lg"
          name="password_confirmation"
        />

      </div>

      <input
        type="submit"
        value='Guardar Password'
        className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer block"
      />
    </form>
  )
}