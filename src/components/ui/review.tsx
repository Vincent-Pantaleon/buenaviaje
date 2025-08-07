// StarRating.tsx
interface StarRatingProps {
  rating: number
  maxStars?: number
  size?: number
  showText?: boolean
}

const StarRating = ({ 
  rating, 
  maxStars = 5, 
  size = 16,
  showText = true 
}: StarRatingProps) => {
  const stars = []
  
  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <span 
        key={i}
        className={`text-${size === 16 ? 'sm' : 'lg'}`}
        style={{ color: i <= rating ? '#FFD700' : '#E5E7EB' }}
      >
        ★
      </span>
    )
  }
  
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {stars}
      </div>
      {showText && (
        <span className="ml-2 text-lg text-white">
          {rating.toFixed(1)} (78 reviews)
        </span>
      )}
    </div>
  )
}

export { StarRating }