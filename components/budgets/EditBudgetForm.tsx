"use client"

import { ChangeEvent, useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Budget, BudgetFormValues } from "@/src/schemas";
import BudgetForm from "./BudgetForm";
import { editBudget } from "@/actions/budgets/edit-budget-action";
import ErrorMessage from "../ui/ErrorMessage";

type EditBudgetFormProps = {
  budget: Budget
}

export default function EditBudgetForm({ budget }: EditBudgetFormProps) {
  const router = useRouter();
  const initialValues: BudgetFormValues = {
    name: budget.name,
    amount: budget.amount
  }
  const [formData, setFormData] = useState(initialValues);

  const editBudgetWithId = editBudget.bind(null, budget.id);
  const [state, dispatch] = useActionState(editBudgetWithId, {
    errors: [],
    success: ''
  });

  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      router.push('/admin');
    }
  }, [state]);

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
        value='Guardar Cambios'
      />
    </form>
  )
}
