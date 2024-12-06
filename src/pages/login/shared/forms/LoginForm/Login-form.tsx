import { Button } from "@/shared/components/ui/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/Form";
import { Input } from "@/shared/components/ui/Input";
import { Spinner } from "@/shared/components/ui/Spinner";
import { loginSchema } from "@/pages/login/shared/forms/LoginForm/schema";
import { createUser } from "@/resources/api/user/user";
import { HttpErrorResponse } from "@/resources/api/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useMutation } from "react-query";
import { z } from "zod";

export function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const mutation = useMutation(createUser, {
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error: HttpErrorResponse) => {
            console.log(error);
        }
    });

    const onSubmit = (data: z.infer<typeof loginSchema>) => {
        setIsLoading(true);
        mutation.mutate(data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Email"
                                    type="email"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mot de passe</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="••••••"
                                    type="password"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="w-full" disabled={isLoading}>
                    {isLoading ? (
                        <Spinner className="text-white" show={isLoading} />
                    ) : (
                        "Se connecter"
                    )}
                </Button>
            </form>
        </Form>
    )
}