// eslint-disable-next-line react/prop-types
function Card({ className, children }) {
  return <article className={`card ${className}`}>{children}</article>;
}

export default Card;
