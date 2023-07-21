import Card from "../services/Card";

// eslint-disable-next-line react/prop-types
function Project({ image, name, description }) {
  return (
    <Card className="project">
      <div className="project__img">
        <img src={image} alt={name} />
      </div>
      <p>{description}</p>
    </Card>
  );
}

export default Project;
