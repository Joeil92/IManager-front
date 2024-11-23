import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LoginForm } from "./Login-form";

describe("Login form", () => {
    it("Should display required error when value is invalid", async () => {
        render(<LoginForm />);
        fireEvent.submit(screen.getByRole("button"));

        expect(await screen.findAllByRole("alert")).toHaveLength(2);
    })

    it("Should display matching error when email is invalid", async () => {
        render(<LoginForm />);
        fireEvent.input(screen.getByLabelText("Email"), { target: { value: "test" } });
        fireEvent.input(screen.getByLabelText("Mot de passe"), { target: { value: "test" } });
        fireEvent.submit(screen.getByRole("button"));

        expect(await screen.findAllByRole("alert")).toHaveLength(1);
    })

    it("Should not display error when value is valid", () => {
        render(<LoginForm />);
        fireEvent.input(screen.getByLabelText("Email"), { target: { value: "test@test.com" } });
        fireEvent.input(screen.getByLabelText("Mot de passe"), { target: { value: "test" } });
        fireEvent.submit(screen.getByRole("button"));

        expect(screen.queryByRole("alert")).toBeNull();
    })

    it("Should submit button is disabled when form is sending", async () => {
        render(<LoginForm />);
        fireEvent.input(screen.getByLabelText("Email"), { target: { value: "test@test.com" } });
        fireEvent.input(screen.getByLabelText("Mot de passe"), { target: { value: "test" } });
        fireEvent.submit(screen.getByRole("button"));

        await waitFor(() => {
            expect(screen.queryByRole("button")).toBeDisabled()
            expect(screen.queryAllByRole("alert")).toHaveLength(0);
        });
    })
})