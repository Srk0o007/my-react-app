import './CoreConcepts.css';

export default function CoreConcept ({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </li>
  );
}