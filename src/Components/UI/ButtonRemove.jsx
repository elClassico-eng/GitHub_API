import React from "react";

export const ButtonRemove = ({ action }) => {
    return (
        <div className="flex justify-center w-auto">
            <button
                className="px-4 py-2 mt-2 rounded-md w-32 bg-blueBG border hover:shadow-md  transition-all"
                onClick={action}
            >
                Remove
            </button>
        </div>
    );
};
