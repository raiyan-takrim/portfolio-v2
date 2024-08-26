import Link from 'next/link'
import React from 'react'
import { FiFacebook, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function SocialBars({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <aside className='invisible lg:visible fixed inset-y-0 left-0 flex flex-col place-content-end place-items-center text-xl px-10'>
                <Link href="#" className='mb-10 hover:text-custom-green-base hover:-translate-y-2 transition duration-300 ease-out'><FiGithub /></Link>
                <Link href="#" className='mb-10 hover:text-custom-green-base hover:-translate-y-2 transition duration-300 ease-out'><FiLinkedin /></Link>
                <Link href="#" className='hover:text-custom-green-base hover:-translate-y-2 transition duration-300 ease-out'><FiFacebook /></Link>
                <div className='w-px h-40 bg-slate-slate mt-10'></div>
            </aside>
            {children}
            <aside className='invisible lg:visible flex flex-col fixed inset-y-0 right-0 place-content-end place-items-center px-10'>
                <Link href="mailto:raiyan.takrim3@gmail.com" className='hover:text-custom-green-base hover:-translate-y-2 transition duration-300 ease-out' style={{ writingMode: "vertical-rl" }}>raiyan.takrim3@gmail.com</Link>
                <div className='w-px h-40 bg-slate-slate mt-10'></div>
            </aside>
        </div>
    )
}
