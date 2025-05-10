

export const Home = ()=>{


    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 
                                to-purple-600 bg-clip-text leading-right text-transparent">
                {/* bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent << this line makes it so that 
                the background is behind area of text, is gradient, and the text is transparent */}

                    Hello, im zanyi
                </h1>

                <p>
                    hehe
                </p>
            </div>
        </section>
    )
}