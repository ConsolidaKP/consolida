'use client'

import { useAuth } from '@/hooks/useAuth'
import { LogInSchema } from '@/lib/resolver'
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import FormError from '@/components/UI/FormError'
import { Button, Input, FormControl, FormLabel, FormErrorMessage, Box, Heading, VStack, Spinner } from '@chakra-ui/react'

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
        <Box maxW="md" mx="auto" mt={10} p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
            <form onSubmit={loginForm.handleSubmit(onSubmit)}>
                <VStack spacing={4}>
                    <Heading as="h1" size="lg" textAlign="center">Inicio de sesión</Heading>
                    
                    <FormControl isInvalid={!!loginForm.formState.errors.email}>
                        <FormLabel>Correo</FormLabel>
                        <Input
                            {...loginForm.register("email")}
                            placeholder="example@email.com"
                            autoComplete="off"
                            isDisabled={loading}
                        />
                        <FormErrorMessage>
                            {loginForm.formState.errors.email && loginForm.formState.errors.email.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!loginForm.formState.errors.password}>
                        <FormLabel>Contraseña</FormLabel>
                        <Input
                            {...loginForm.register("password")}
                            placeholder="•••••••"
                            type="password"
                            autoComplete="off"
                            isDisabled={loading}
                        />
                        <FormErrorMessage>
                            {loginForm.formState.errors.password && loginForm.formState.errors.password.message}
                        </FormErrorMessage>
                    </FormControl>

                    <Button
                        type="submit"
                        colorScheme="blue"
                        isFullWidth
                        isLoading={loading}
                        loadingText="Cargando"
                    >
                        Login
                    </Button>

                    {error && <FormError message={error} />}
                </VStack>
            </form>
        </Box>
    )
}