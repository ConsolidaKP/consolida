'use client'
import { usePathname } from "next/navigation"
import { Button } from "./button"
import useMediaQuery from "@/hooks/useMediaQuery"

type ActionProps = {
    title: string,
    urlMatch?: string,
    icon: React.ReactNode,
    onClick: () => void
}

export default function Action({ icon, onClick, urlMatch, title }: ActionProps) {

    const pathname = usePathname()
    let disabled = false

    if (pathname === urlMatch)
        disabled = true

    const isMobile = useMediaQuery("sm");

    return isMobile
        ?
        (
            <span className="relative" onClick={onClick}>
                <p className="absolute w-max -translate-x-[93%] top-0 -translate-y-[32%] text-sm text-white bg-primary rounded-s p-0.5 pl-2 pr-4">{title}</p>
                <Button
                    size="icon"
                    className={'rounded-full z-50'}
                    disabled={disabled}
                >
                    {icon}
                </Button>
            </span>
        )
        :
        (
            <span className="flex flex-col items-center gap-0.5">
                <Button
                    size="icon"
                    onClick={onClick}
                    className={'rounded-full z-50'}
                    disabled={disabled}
                >
                    {icon}
                </Button>
                <p className="text-sm text-black/70 text-center">{title}</p>
            </span>
        )

}