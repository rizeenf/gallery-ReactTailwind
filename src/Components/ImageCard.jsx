import React from "react";

const ImageCard = ({ image }) => {
  const splitTag = image.tags.split(", ");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="text-xl mb-2 font-bold text-purple-500">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views : {image.views}</strong>
          </li>
          <li>
            <strong>Likes : {image.likes}</strong>
          </li>
          <li>
            <strong className="text-red-800">
              Dislikes : {image.downloads}
            </strong>
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {splitTag.map((tags, index) => (
          <span
            key={index}
            className="inline-block px-2 text-sm font-bold py-1 rounded-full text-gray-700 bg-gray-200 mr-1"
          >
            #{tags}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
