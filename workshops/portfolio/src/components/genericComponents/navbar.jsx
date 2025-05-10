import { useEffect } from "react"

// this one used to set hidden instead of md for pc
export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])


    return(
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-large border-white/10 shadow-large">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        Hii
                        <span className="text-blue-500">
                            .Zan Yi
                        </span>
                    </a>
                    {/* md means after middle what will it do. In this case, hide.*/}
                    <div 
                    className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                        &#9776;
                    </div>

                    {/* pc menu, when after middle, becomes flex */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#Home" className="tex-grey-300 hove:text-white transition-colors"> Home </a>
                        <a href="#About" className="tex-grey-300 hove:text-white transition-colors"> About </a>
                        <a href="#Contacts" className="tex-grey-300 hove:text-white transition-colors"> Projects </a>
                    </div>
                </div>
            </div>
        </nav>
    )
} 