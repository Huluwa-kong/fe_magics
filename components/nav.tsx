"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

enum MenuChoice {
    HOME = 'index',
    POST = 'post',
    ABOUT = 'about',
}

export default function Navbar({home = false}: { home: boolean | undefined }) {
    const [menu, setMenu] = React.useState(MenuChoice.HOME)

    // get current path
    const pathname = usePathname()

    React.useEffect(() => {
        let choice = MenuChoice.HOME
        if (pathname.search('/post') !== -1) choice = MenuChoice.POST
        else if (pathname.search('/about') !== -1) choice = MenuChoice.ABOUT
        else if (pathname.search('/') !== -1) choice = MenuChoice.HOME
        setMenu(choice)
    }, [pathname])

    const items = [
        {
            href: '/',
            label: '首页',
            key: MenuChoice.HOME
        },
    ]

    return (
        <nav className="flex items-center justify-between" aria-label="Global">
            <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Brye</span>
                </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-8">
                { items.map((item) => (
                    <Link href={ item.href } key={ item.href }
                          className={ "group flex h-8 items-center rounded-md bg-transparent px-3 leading-none text-xl text-slate-600 hover:bg-gray-50 hover:text-slate-700 " + (menu === item.key ? "bg-violet-50" : "") }>
                        { item.label }
                    </Link>
                )) }
            </div>
        </nav>
    )
}
