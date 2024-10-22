import image1 from "../assets/papoilas.jpg"
import image2 from "../assets/amor-perfeito.jpg"
import image3 from "../assets/malmequer.jpg"
import "./MYCOMPONENT.css"

// Card Component
const Card = ({ imageUrl, title, description, link }: any) => (
  <div className="image">
    <img className="title" src={imageUrl} alt={title} />
    <div className="description">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    {link && (
      <div className="point">
        <a
          href={link}
          className=""
        >
                 </a>
      </div>
    )}
  </div>
);

// Main Page Component
const MainPage = () => (
  <div className="alltext">
    <h1 className="main-text">Differents kind of flowers</h1>
    <div className="Grid">
      <Card
        imageUrl={image1}
        title="Beautiful red flowers"
        description="The poppy is a plant of the Papaveraceae family, and its best-known species, Papaver somniferum, is the one popularly known as Dormideira.

It is an annual herbaceous plant with nutritional, oleaginous and medicinal properties. This plant has a tall, branched stem with oval leaves. The flowers are large, white, pink, violet or red, and the fruit is a capsule."
        link="https://example.com/landscapes"
      />
      <Card
        imageUrl={image2}
        title="Beautiful purple flowers"
        description="Known among botanists by the scientific name Viola tricolor, the pansy flower originates from Asia and Europe. It belongs to the Violaceous family, which also includes the traditional violets."
        link="https://example.com/recipes"
      />
      <Card
        imageUrl={image3}
        title="Beautiful orange flowers"
        description="Marigold, scientifically known as Tagetes erecta, is a herbaceous plant belonging to the Asteraceae family. Originally from Mexico, this flower is widely cultivated throughout the world due to its beauty and medicinal properties. Marigold is an annual plant that can reach up to 1 meter in height and has large, showy flowers, usually in yellow, orange and red colors."
        link="https://example.com/tech"
      />
    </div>
  </div>
);

export default MainPage;

import React from 'react';
