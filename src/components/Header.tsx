import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import React from 'react'

export default function Header() {
    return (
        <header>
            <Sheet>
                <SheetTrigger>
                    <div className=''>
                        <div className="h-1"> OPEN </div>
                    </div>
                </SheetTrigger>
                <SheetContent>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </SheetContent>
            </Sheet>

        </header>
    )
}
