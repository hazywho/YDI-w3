import { useEffect, useState } from "react"

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("")
    const fullText = "<Hello World/>"

    useEffect(() => { //this function is immediately ran
        let index = 0
        const interval = setInterval(() => {
            setText(fullText.substring(0,index))
            index++

            if (index > fullText.length) {
                clearInterval(interval)

                setTimeout(() => {
                    onComplete() // Call the onComplete function after the text is fully displayed
                }, 2000) // Wait for 1 second before calling onComplete
            } 
        }, 100) //100ms for each character 

        return () => clearInterval(interval) // Cleanup interval on unmount, avoid memory leaks
    
    }, [onComplete]) //have to pass in onComplete because it is a dependancy of a function inside this function


    return( 
        <div className="fixed inset-0 z-50 bg-black test-gray-100 flex flex-col items-center justify-center" >
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1"> | </span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f7] animate-loading-bar">
                    {" "}
                </div>
            </div>
        </div>
    )
}