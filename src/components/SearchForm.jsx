// src/components/SearchForm.jsx
import React from "react";

const SearchForm = () => {
    return (
        <div className="absolute w-full flex justify-center items-center">
            <div className="bg-gray-100 rounded-lg shadow-lg p-[20px] w-[calc(100%-180px)] min-h-[250px] mt-[120px] mx-[90px] box-border relative">

                {/* Query Box */}
                <div className="flex flex-col items-center p-[20px] box-border">

                    <form
                        onSubmit={(e) => { e.preventDefault(); console.log("Search triggered"); }}
                        className="relative w-[30rem] bg-green-500 rounded-lg"
                    >
                        <label htmlFor="search" className="sr-only">Search for stuff</label>

                        <input
                            id="search"
                            type="search"
                            placeholder="Enter Symptoms or Diseases"
                            required
                            autoFocus
                            className="w-full h-[3rem] px-[1.6rem] bg-white text-gray-800 text-[1.8rem] border-none outline-none rounded-lg transition-all duration-300 ease-in-out focus:ring-2 focus:ring-green-300"
                        />

                        <button
                            type="submit"
                            className="hidden absolute top-0 right-0 w-[6rem] h-[3rem] bg-green-500 text-white font-bold rounded-r-lg"
                        >
                            <img
                                src="https://img.icons8.com/material-outlined/24/arrow.png"
                                alt="arrow"
                                width="24"
                                height="24"
                                className="mx-auto"
                            />
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SearchForm;
