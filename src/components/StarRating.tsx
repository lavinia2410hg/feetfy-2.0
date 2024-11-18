import React from 'react';
import { GoStar, GoStarFill } from 'react-icons/go'; // Biblioteca de ícones

interface StarRatingProps {
    maxRating?: number;
    onRatingChange?: (rating: number) => void;
    setRating: (rating: number) => void
    rating: number
}

const StarRating: React.FC<StarRatingProps> = ({ maxRating = 5, onRatingChange, rating, setRating }) => {

    const handleClick = (ratingValue: number) => {
        setRating(ratingValue);
        if (onRatingChange) {
            onRatingChange(ratingValue); // Opcionalmente, chama a função de callback para enviar a avaliação
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }} className='flex-col w-full items-center justify-center'>
            <div className='flex gap-[1px]  w-full items-center justify-center'>
                {Array.from({ length: maxRating }, (_, index) => {
                    const ratingValue = index + 1;
                    return (
                        <>
                            {ratingValue <= rating ?
                                <GoStarFill
                                    key={ratingValue}
                                    size="3rem"
                                    onClick={() => handleClick(ratingValue)}
                                    style={{
                                        marginRight: '5px',
                                        cursor: 'pointer',
                                        color: ratingValue <= rating ? '#a365f7' : 'gray',
                                        width:"40px"
                                    }}
                                />
                                :
                                <GoStar
                                    key={ratingValue}
                                    size="3rem"
                                    onClick={() => handleClick(ratingValue)}
                                    style={{
                                        marginRight: '5px',
                                        cursor: 'pointer',
                                        color: ratingValue <= rating ? 'purple' : 'gray',
                                        width:"40px"
                                    }}
                                />
                            }
                        </>
                    );
                })}</div>
        </div>
    );
};

export default StarRating;
