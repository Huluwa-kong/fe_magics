import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import Navbar from '@/components/nav'

const inter = Inter({subsets: ['latin']})


enum MenuChoice {
    HOME = 'index',
    POST = 'post',
    ABOUT = 'about',
}

export default function RootLayout(
    {
        children
    }: {
        children: React.ReactNode
    }) {

    const items = [
        {
            href: '/',
            label: '首页',
            key: MenuChoice.HOME
        },
    ]

    return (
        <html lang="en">
        <body className={ inter.className }>
        <div className="isolate bg-white">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <svg
                    className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                >
                    <path
                        fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                        fillOpacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                        <linearGradient
                            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                            x1="1155.49"
                            x2="-78.208"
                            y1=".177"
                            y2="474.645"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#9089FC"/>
                            <stop offset={ 1 } stopColor="#FF80B5"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="max-w-6xl mx-auto py-4">
                <Navbar home={ true }/>
            </div>
        </div>
        <main className="max-w-6xl mx-auto">
            { children }
            <div className="relative px-6 lg:px-8">
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <svg
                        className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                    >
                        <path
                            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                            fillOpacity=".3"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                            <linearGradient
                                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                x1="1155.49"
                                x2="-78.208"
                                y1=".177"
                                y2="474.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9089FC"/>
                                <stop offset={ 1 } stopColor="#FF80B5"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </main>
        <footer>
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    { items.map((item) => (
                        <div key={ item.href } className="pb-6">
                            <a href={ item.href } className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                { item.label }
                            </a>
                        </div>
                    )) }
                </nav>
                <p className="mt-10 text-center text-xs leading-5 text-gray-500">&copy; 2017~2023 AILEZI, All rights
                    reserved.</p>
            </div>
        </footer>
        </body>
        </html>
    )
}
