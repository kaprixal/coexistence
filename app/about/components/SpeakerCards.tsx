import React from "react";

// Define a type for the props
interface SpeakerCardsProps {
  image: string;
  title: string;
  company: string;
  l1: string;
  l2: string;
  description: string;
}
export const SpeakerCards: React.FC<SpeakerCardsProps> = ({
  image,
  title,
  company,
  l1,
  l2,
  description,
}) => {
  return (
    <div className="speaker-cards">
      <img src={l1} alt={title} className="speaker-cards-image" />
      <img src={l2} alt={title} className="speaker-cards-image" />
      <img src={image} alt={title} className="speaker-cards-image" />
      <h3 className="speaker-cards-title-company">
        {title}/{company}
      </h3>
      <p className="speaker-cards-description">{description}</p>
    </div>
  );
};
