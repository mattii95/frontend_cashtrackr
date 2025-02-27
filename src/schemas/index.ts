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

export const SuccessSchema = z.string();
export const ErrorResponseSchema = z.object({
  error: z.string(),
})

export const TokenSchema = z.string({ message: 'Token no válido' }).length(6, { message: 'Token no válido' });
