import { useState, useEffect } from 'react';

export default function useScrolledDown(){

    const [isScrolledDown, setIsScrolledDown] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 200) {
                setIsScrolledDown(true)
            } else {
                setIsScrolledDown(false)
            }
        })
    }, [])

    return isScrolledDown
}