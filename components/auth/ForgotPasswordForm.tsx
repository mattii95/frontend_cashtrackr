'use client'

import { forgotPassword } from "@/actions/forgot-password-action"
import { ChangeEvent, useActionState, useEffect, useState } from "react"
import { toast } from "react-toastify";

export default function ForgotPasswordForm() {
  const initialValues = {
    email: ''
  }

  const [state, dispatch] = useActionState(forgotPassword, {
    errors: [],
    success: ''
  });

  const [formData, setFormData] = useState(initialValues);

  useEffect(() => {
    if (state.errors) {
      state.errors.forEach(error => toast.error(error));
    }
    if (state.success) {
      toast.success(state.success);
      setFormData(initialValues);
    }
  }, [state]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form
      action={dispatch}
      className=" mt-14 space-y-5"
      noValidate
    >
      <div className="flex flex-col gap-2 mb-10">
        <label
          className="font-bold text-2xl"
        >Email</label>

        <input
          type="email"
          placeholder="Email de Registro"
          className="w-full border border-gray-300 p-3 rounded-lg"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        value='Enviar Instrucciones'
        className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer "
      />
    </form>
  )
}
