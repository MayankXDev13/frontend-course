import React from "react";

function Card({ title="Default", buttonText="check it out" }) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow">
        <img
          className="w-full h-48 object-cover"
          src="https://plus.unsplash.com/premium_photo-1765020473893-b6095f8a2363?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          alt="Sample Image"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="mt-2 text-gray-600 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            vitae repellat voluptatem tenetur ullam esse, dolor ipsa
            reprehenderit eum quod, quibusdam iusto dolorem sequi harum.
          </p>
          <button className="mt-4 px-4 bg-blue-600 rounded-xl text-white py-2">
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
