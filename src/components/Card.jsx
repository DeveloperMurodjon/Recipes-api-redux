import React, { useState } from 'react';

function Card({ recipe }) {

    return (
        <div className="w-full  flex border border-gray-300 rounded-lg shadow-md bg-white 
        transition-all duration-300 hover:shadow-lg hover:scale-[1.01] p-4 gap-4 ">

            <img
                src={recipe.image}
                className="w-[300px] h-[300px] object-cover rounded-lg"
                alt={recipe.name}
            />

            <div className="flex gap-4 flex-col flex-1">
                <h2 className="font-extrabold text-[20px] text-gray-900 line-clamp-2">{recipe.name}</h2>

                <p className="font-medium text-lg text-gray-600">
                    <span className='font-bold text-gray-700'>INGREDIENTS:</span>   {Array.isArray(recipe.ingredients) ? recipe.ingredients.join(", ") : recipe.ingredients}
                </p>

                <p className="font-medium text-lg text-gray-600">
                    <span className='font-bold text-gray-700'>INSTRUCTIONS:</span>   {Array.isArray(recipe.instructions) ? recipe.instructions.join(", ") : recipe.instructions}
                </p>


                <div className='flex gap-1 mt-2'>
                    {Array.isArray(recipe.mealType) ? (
                        recipe.mealType.map((type, index) => (
                            <p key={index} className="p-2 bg-gray-200 rounded-lg text-gray-600 font-semibold">
                                {type}
                            </p>
                        ))
                    ) : (
                        <p className="p-2 bg-gray-200 rounded-lg text-gray-600 font-semibold">
                            {recipe.mealType}
                        </p>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Card;
