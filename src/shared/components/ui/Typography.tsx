import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Tag = 'small' | 'muted' | 'p' | 'span' | 'h4' | 'h3' | 'h2' | 'h1';

interface Props {
    children: ReactNode
    tag?: Tag
    className?: String;
    onClick?: () => void;
}

export function Typography({ children, tag = 'p', className, onClick }: Props) {
    return (
        tag === 'small' && <small className={cn("text-sm font-medium leading-none")}>{children}</small> ||
        tag === 'muted' && <p className={cn("text-sm text-muted-foreground")}>{children}</p> ||
        tag === 'p' && <p className={cn("leading-7")}>{children}</p> ||
        tag === 'span' && <span className={cn(className)} onClick={onClick}>{children}</span> ||
        tag === 'h4' && <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>{children}</h4> ||
        tag === 'h3' && <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>{children}</h3> ||
        tag === 'h2' && <h2 className={cn("scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>{children}</h2> ||
        tag === 'h1' && <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>{children}</h1>
    )
}