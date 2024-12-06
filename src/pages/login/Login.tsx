import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/Card";
import { LoginForm } from "./shared";
import { Scissors } from "lucide-react";
import { Typography } from "@/shared/components/ui/Typography";

export function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <Scissors className="m-auto h-16 w-16 p-2 bg-gray-200 text-muted-foreground rounded-lg mb-6" />
                    <CardTitle>Se connecter</CardTitle>
                    <CardDescription>Accéder à votre espace de gestion</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <LoginForm />
                    <div className="text-center">
                        <Typography tag="muted">Vous n'avez pas de compte ? Veuillez vous rapprocher de votre gérant.</Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}