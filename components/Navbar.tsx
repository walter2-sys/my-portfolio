import Link from "next/link";

export default function Navbar() {
    return (
        <header className="w-full border-b border-gray-200">

            <nav className="max-w-5xl mx-auto flex items-center justify-between p-6">

                <Link href="/" className="font-bold text-lg">Taha.dev</Link>
                
                <div className="flex gap-6 text-sm">
                    <Link href="/" className="group relative">
                    Home
                    <span 
                        className="
                        absolute 
                        left-0 
                        bottom-0 
                        h-0.5 
                        w-full 
                        bg-black 
                        scale-x-0
                        transition-transform
                        duration-300
                        origin-left
                        group-hover:scale-x-100
                        "
                    />
                    </Link>

                    <Link href="/projects" className="group relative">
                    Projects
                    <span
                        className="
                        absolute
                        left-0
                        bottom-0
                        h-0.5
                        w-full
                        bg-black
                        scale-x-0
                        transition-transform
                        duration-300
                        origin-left
                        group-hover:scale-x-100
                        "
                    />
                    </Link>

                    <Link href="/journey" className="group relative">
                    Journey
                    <span
                        className="
                        absolute
                        left-0
                        bottom-0
                        h-0.5
                        w-full
                        bg-black
                        scale-x-0
                        transition-transform
                        duration-300
                        origin-left
                        group-hover:scale-x-100
                        "
                    />
                    </Link>

                    <Link href="/about" className="group relative">
                    About
                    <span
                        className="
                        absolute
                        left-0
                        bottom-0
                        h-0.5
                        w-full
                        bg-black
                        scale-x-0
                        transition-transform
                        duration-300
                        origin-left
                        group-hover:scale-x-100
                        "
                    />
                    </Link>
                
                    <Link href="/contact" className="group relative">
                    Contact
                    <span
                        className="
                        absolute
                        left-0
                        bottom-0
                        h-0.5
                        w-full
                        bg-black
                        scale-x-0
                        duration-300
                        origin-left
                        group-hover:scale-x-100
                        "
                    />
                    </Link>

                </div>
            </nav>
        </header>
    )
}