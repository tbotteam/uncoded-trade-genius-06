import { Star } from "lucide-react";

interface StarRatingProps {
    rating: number;
    maxRating?: number;
    starClassName?: string;
    color?: string;
}

const StarRating = ({
    rating,
    maxRating = 5,
    starClassName = "w-5 h-5",
    color = "text-primary",
}: StarRatingProps) => {
    const fullStars = Math.floor(rating);
    const hasPartialStar = rating % 1 !== 0;
    const partialStarPercentage = ((rating % 1) * 100).toFixed(0);
    const emptyStars = maxRating - Math.ceil(rating);

    return (
        <div className='flex gap-1'>
            {/* Full stars */}
            {[...Array(fullStars)].map((_, i) => (
                <Star key={`full-${i}`} className={`${starClassName} fill-current ${color}`} />
            ))}

            {/* Partial star */}
            {hasPartialStar && (
                <div className={`relative ${starClassName}`}>
                    <Star
                        className={`${starClassName} ${color}`}
                        fill='none'
                        strokeWidth={1.5}
                    />
                    <Star
                        className={`${starClassName} fill-current ${color} absolute inset-0`}
                        style={{
                            clipPath: `inset(0 ${113 - parseInt(partialStarPercentage)}% 0 0)`,
                        }}
                    />
                </div>
            )}

            {/* Empty stars */}
            {[...Array(emptyStars)].map((_, i) => (
                <Star
                    key={`empty-${i}`}
                    className={`${starClassName} ${color}`}
                    fill='none'
                    strokeWidth={1.5}
                />
            ))}
        </div>
    );
};

export default StarRating;

