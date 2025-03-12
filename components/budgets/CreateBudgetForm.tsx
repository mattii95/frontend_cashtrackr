"use client"

import { ChangeEvent, useActionState, useEffect, useState } from "react"
import { toast } from "react-toastify";
import { createBudget } from "@/actions/budgets/create-budget-action"
import ErrorMessage from "../ui/ErrorMessage";
import { BudgetFormValues } from "@/src/schemas";
import BudgetForm from "./BudgetForm";

export default function CreateBudgetForm() {
  const initialValues: BudgetFormValues = {
    name: '',
    amount: ''
  }

  const [formData, setFormData] = useState(initialValues);

  const [state, dispatch] = useActionState(createBudget, {
    errors: [],
    success: ''
  });

  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      setFormData(initialValues);
    }
  }, [state])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form
      action={dispatch}
      className="mt-10 space-y-3"
      noValidate
    >
      {
        state.errors.map((error, i) => <ErrorMessage key={i}>{error}</ErrorMessage>)
      }
      <BudgetForm formData={formData} handleChange={handleChange} />
      <input
        type="submit"
        className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors"
        value='Crear Presupuesto'
      />
    </form>
  )
}