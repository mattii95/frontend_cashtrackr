import { z } from 'zod';

export const RegisterSchema = z.object({
  email: z.string()
    .min(1, { message: 'El email es obligatorio' })
    .email({ message: 'Email no valido' }),
  name: z.string()
    .min(1, { message: 'El nombre no puede ir vacio' }),
  password: z.string()
    .min(8, { message: 'La contraseña debe ser minimo 8 caracteres' }),
  password_confirmation: z.string(),
}).refine((data) => data.password === data.password_confirmation, {
  message: 'Las contraseñas deben ser iguales',
  path: ['password_confirmation'],
})

// Login Schema
export const LoginSchema = z.object({
  email: z.string()
    .min(1, { message: 'El Email es Obligatorio' })
    .email({ message: 'Email no válido' }),
  password: z.string()
    .min(1, { message: 'La contraseña no puede ir vacia' })
});

export const TokenSchema = z.string({ message: 'Token no válido' }).length(6, { message: 'Token no válido' });

export const ForgotPasswordSchema = z.object({
  email: z.string()
    .min(1, { message: 'El Email es Obligatorio' })
    .email({ message: 'Email no válido' }),
})

export const ResetPasswordSchema = z.object({
  password: z.string()
    .min(8, { message: 'El Password debe ser de al menos 8 caracteres' }),
  password_confirmation: z.string()
}).refine((data) => data.password === data.password_confirmation, {
  message: "Los Passwords no son iguales",
  path: ["password_confirmation"]
});

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email()
});



export const SuccessSchema = z.string();
export const ErrorResponseSchema = z.object({
  error: z.string(),
});


// Budgets
export const DraftBudgetSchema = z.object({
  name: z.string()
    .min(1, { message: 'El Nombre del presupuesto es obligatorio' }),
  amount: z.coerce.
    number({ message: 'Cantidad no válida' })
    .min(1, { message: 'Cantidad no válida' }),
})

export const BudgetAPIResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  amount: z.string(),
  userId: z.number(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export const BudgetsAPIResponseSchema = z.array(BudgetAPIResponseSchema);


// Types
export type User = z.infer<typeof UserSchema>;
export type Budget = z.infer<typeof BudgetAPIResponseSchema>;


// Formularios
export type BudgetFormValues = {
  name: string,
  amount: string
}