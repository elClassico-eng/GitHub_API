import React from "react";

import { useAppSelector } from "../../Hooks/redux";
import { FavCard } from "../../Components/FavCard";

export const FavoritePages = () => {
    const { favorites } = useAppSelector((state) => state.gitHub);

    return (
        <div className="flex flex-col justify-center w-full min-h-screen px-4 py-2 border-y border-white text-white bg-blueBG">
            <div className="title mb-2">
                <h1 className="font-normal text-2xl md:text-4xl text-white mt-4 text-center md:text-left">
                    Favorite repositories✔:
                </h1>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center md:justify-start">
                {favorites?.map((fav, index) => (
                    <FavCard key={index} fav={fav} />
                ))}
            </div>
        </div>
    );
};
