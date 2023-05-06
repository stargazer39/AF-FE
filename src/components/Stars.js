const Stars = ({ stars, setStars }) => {
  const handleClick = value => {
    setStars(value)
  }

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index + 1)}
          style={{
            cursor: 'pointer',
            fontSize: '50px',
            color: index < stars ? 'gold' : 'black',
          }}
        >
          {index + 1 <= stars ? '★' : '☆'}
        </span>
      ))}
    </div>
  )
}

export default Stars
