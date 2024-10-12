'use client'

import { useAuth } from '@/hooks/useAuth'
import { LogInSchema } from '@/lib/resolver'
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/UI/form'
import FormError from '@/components/UI/FormError'
import { Button } from '@/components/UI/button'
import { Input } from '@/components/UI/input'
import Spinner from '@/components/UI/spinner'

export default function LogInForm({ homeURL }: { homeURL: string }) {

    const { login, loading } = useAuth()
    const [error, setError] = useState<string>("")
    const router = useRouter()


    const loginForm = useForm<z.infer<typeof LogInSchema>>({
        resolver: zodResolver(LogInSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = async (data: z.infer<typeof LogInSchema>) => {
        setError("");
        const err = await login(data);
        if (err !== undefined) setError(err.error)
        else router.push(homeURL)
    }

    return (
        <div className="w-10/12 sm:min-w-[28rem] sm:h-fit sm:max-w-md mx-auto rounded-lg overflow-hidden shadow-md">
            <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-6 bg-white py-4 px-4 md:p-6 md:px-8 border-t-4 border-primary">
                    <h1 className={'text-3xl text-center font-bold my-4'}>Inicio de sesión</h1>
                    <div className="space-y-4">
                        <FormField
                            control={loginForm.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel> Correo </FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="example@email.com" autoComplete="off" disabled={loading} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={loginForm.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel> Contraseña </FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="•••••••" type="password" autoComplete="off" disabled={loading} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>


                    {
                        loading ?
                            <Button disabled className="w-full pt-2">
                                <Spinner />
                            </Button>
                            :
                            <Button type="submit" className="w-full"> Login </Button>
                    }

                    <FormError message={error} />

                </form>
            </Form>
        </div>
    )
}