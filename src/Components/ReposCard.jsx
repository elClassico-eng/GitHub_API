import React, { useState } from "react";

import { useActions } from "../Hooks/actions";
import { Button } from "./UI/Button";
import { ButtonRemove } from "./UI/ButtonRemove";
import { useAppSelector } from "../Hooks/redux";

export const ReposCard = ({ repo }) => {
    const { favorites } = useAppSelector((state) => state.gitHub);
    const { addFavorites, removeFavorites } = useActions();

    const [isFav, setFav] = useState(favorites.includes(repo.html_url));

    const addToFavourite = (event) => {
        event.preventDefault();
        addFavorites(repo.html_url);
        setFav(true);
    };

    const removeFromFavourite = (event) => {
        event.preventDefault();
        removeFavorites(repo.html_url);
        setFav((prev) => !prev);
    };

    return (
        <div className="bg-cardBG text-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 w-full max-w-xl mx-auto h-[420px]">
            <div className="flex">
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer  p-6 z-10 "
                >
                    <h1 className="text-xl mb-12">{repo.name}</h1>
                    <div className="flex flex-col mb-12">
                        <p>
                            Created:{" "}
                            <span className="font-bold">{repo.created_at}</span>
                        </p>
                        <p>
                            Visibility:{" "}
                            <span className="font-bold">{repo.visibility}</span>
                        </p>
                        <p>
                            Forks:{" "}
                            <span className="font-bold">{repo.forks}</span>
                        </p>
                    </div>
                    <div className="mb-24 flex">
                        <h2 className="font-normal mb-2">Description:</h2>
                        <p className="text-sm font-thin">{repo.description}</p>
                    </div>
                    <div className="flex items-center  justify-center">
                        {!isFav && <Button action={addToFavourite} />}
                        {isFav && <ButtonRemove action={removeFromFavourite} />}
                    </div>
                </a>
            </div>
        </div>
    );
};
