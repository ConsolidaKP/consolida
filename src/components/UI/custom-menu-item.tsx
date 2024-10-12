'use client';

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

type CustomMenuItemProps = {
    icon: React.ReactNode,
    label: string,
    href?: string,
    isLogOut?: boolean
}

export default function CustomMenuItem({ icon, label, href, isLogOut = false }: CustomMenuItemProps) {
    const { logout } = useAuth();
    const router = useRouter();
    
    const handleLogout = () => {
        logout();
        router.push('/');
    }

    return (
        <span className={`gap-1 flex items-center`} onClick={isLogOut ? handleLogout : undefined}>
            {icon}
            {href ? (
                <Link href={href}>
                    {label}
                </Link>
            ) : (
                <p >{label}</p>
            )}
        </span>
    );
};
