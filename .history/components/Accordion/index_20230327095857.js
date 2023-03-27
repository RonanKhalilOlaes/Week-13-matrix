import { useState } from "react"

export default function Accordion ({
    term, 
    code, 
    title,
    credits, 
    description
}) {

    const [isActive, setIsAcive] = useState(false);
    return (
        <>
            Term: {term}

            <div onClick={() => setIsAcive(!isActive)}>
                {code}
                {title}
                {credits}
            </div>  {isActive ? '^' : ''}
        </>
    )
}