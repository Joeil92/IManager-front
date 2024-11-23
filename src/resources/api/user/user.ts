import { loginSchema } from "@/pages/login/shared/forms/LoginForm/schema";
import { z } from "zod";
import { iManagerCall } from "../utils/api";
import { User } from "./types";

export const createUser = (data: z.infer<typeof loginSchema>) => {
    return iManagerCall<User>("/api/users", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data)
    })
}