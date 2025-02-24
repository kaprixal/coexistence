import React from "react";

// Define a type for the props
interface DescriptionProps {
  header: string;
  paragraph: string;
  splitSentences?: boolean; // New optional prop to handle the boolean flag
}

export const DescriptionCards: React.FC<DescriptionProps> = ({
  header,
  paragraph,
  splitSentences = false, // Default is false, meaning no splitting into <li>
}) => {
  // Function to split the paragraph into sentences
  const splitIntoSentences = (text: string) => {
    return text
      .split(". ")
      .filter((sentence) => sentence) // Removes any empty strings
      .map((sentence, index) => <li key={index}>{sentence}</li>); // Adding <li> to each sentence
  };

  return (
    <div>
      <h1 className="mt-16 text-3xl lg:text-5xl text-primary font-bold">
        {header}
      </h1>
      <div className="sm:text-xl w-50 mx-auto pt-5 text-base lg:text-2xl">
        {splitSentences ? (
          <ul className="list-disc pl-6 inline-block text-left">{splitIntoSentences(paragraph)}</ul>
        ) : (
          <p>{paragraph}</p> // Display as normal paragraph if splitSentences is false
        )}
      </div>
    </div>
  );
};
