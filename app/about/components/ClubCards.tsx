import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define a type for the props
interface ClubCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const ClubCards: React.FC<ClubCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    // Flex container for both desktop and mobile
    <div>
      {/* Desktop layout */}
      <div className="hidden md:flex flex-row gap-14 pb-20 justify-center items-center">
        <Link href={link}>
          <Image
            src={image}
            alt={title}
            className="object-cover h-auto max-w-none w-32"
            quality={100}
            loading="lazy"
          />
        </Link>
        <div>
          <h3 className="text-2xl lg:text-4xl text-primary font-bold text-left">
            {title}
          </h3>
          <p className="sm:text-xl text-base lg:text-2xl">{description}</p>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col justify-center items-center gap-5 pb-10 lg:pb-20">
        <Link href={link}>
          <Image
            src={image}
            alt={title}
            className="w-24 md:w-32 object-contain h-auto"
            quality={100}
            loading="lazy"
          />
        </Link>
        <div>
          <h3 className="text-2xl lg:text-4xl text-primary font-bold text-center">
            {title}
          </h3>
          <p className="sm:text-xl text-base lg:text-2xl text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
