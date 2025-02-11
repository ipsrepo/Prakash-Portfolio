import React from 'react'
interface RatingProps {
    rating: string;
}

const Rating: React.FC<RatingProps> = (props) => {

    let rating = Math.floor(+props?.rating);
    const TOTAL_BARS = 5;

    const res = Array.from({ length: TOTAL_BARS }, (_, i) => {
        return <p className={`h-3 w-12 mr-0.25 border border-line ${rating-- > 0 ? "bg-accent border-accent" : "bg-white"}  `}></p>
    })

    return (
        <>
            <div className='flex flex-row h-fit'>{res}</div>
        </>
    )
}

export default React.memo(Rating);
