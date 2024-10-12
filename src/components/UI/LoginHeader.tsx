import React from 'react'

type LoginHeaderProps = {
    title: string
}

export default function LoginHeader({ title }: LoginHeaderProps) {
    return (
        <div className="flex justify-center items-center">
            <div className="text-center mt-32">
                <h1 className="text-4xl font-bold mt-2">Consolida ERP</h1>
                <h2 className="mt-2 text-gray-400 font-bold text-2xl">{title}</h2>
                <div className="mt-4 flex justify-center items-center ">
                    <img
                        alt="logo"
                        src="/logo-removebg-preview.png"
                        className="h-32 px-4 rounded-full drop-shadow-lg "
                    />
                </div>
            </div>
        </div>
    )
}