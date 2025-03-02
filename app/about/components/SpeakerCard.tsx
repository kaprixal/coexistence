import React from "react";
import Image from 'next/image';

// Define an interface for the props
interface SpeakerCardProps {
  image?: string;
  name: string;
  title: string;
  company?: string;
  description: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  image,
  name,
  title,
  company,
  description,
}) => {
  return (

    <div className='flex flex-row lg:w-1/5 h-50 px-5 py-3 space-x-2 bg-secondary rounded-xl text-white flex flex-col text-center shadow-lg'>
      <Image src={image || '/prizes/jellycatBunny.png'} alt='Guest Image' width={100} height={100} className='w-24 h-24 mx-auto rounded-full object-cover' />
      <div className="flex text-center justify-center flex-col mt-4">
        <p className="text-md font-bold text-primary">{company}</p>
        <h1 className="font-regular text-2xl">{name}</h1>
        <p className="font-regular text-sm pb-3 text-primary">
          {title}
        </p>
        <p className="font-light text-xs pb-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SpeakerCard;