'use client'
import React, { ChangeEvent, useActionState, useEffect, useState } from "react"
import { authenticate } from "@/actions/authenticate-user-action"
import { toast } from "react-toastify";

export default function LoginForm() {
  const [state, dispatch] = useActionState(authenticate, {
    errors: []
  });

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (state.errors) {
      state.errors.forEach(error => {
        toast.error(error);
      });
    }

  }, [state])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form
        method="POST"
        action={dispatch}
        className="mt-14 space-y-5"
        noValidate
      >
        <div className="flex flex-col gap-2">
          <label
            className="font-bold text-2xl"
          >Email</label>

          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full border border-gray-300 p-3 rounded-lg"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="font-bold text-2xl"
          >Password</label>

          <input
            type="password"
            placeholder="Password de Registro"
            className="w-full border border-gray-300 p-3 rounded-lg"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          value='Iniciar Sesión'
          className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer"
        />
      </form>
    </>
  )
}
