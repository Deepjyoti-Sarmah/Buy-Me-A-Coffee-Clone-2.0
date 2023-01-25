import React from "react";

const Navbar = () => {
    return (
        <>
            <div className=" bg-yellow-200 mx-10 my-5 px-1 py-1 flex justify-center items-center rounded-full drop-shadow-md ">
                <nav className="flex justify-center items-center px-2 py-2">
                    <img className='mx-2 my-2 rounded-full' width={50} height={50} src="https://user-images.githubusercontent.com/16066404/77041853-a2044100-69e0-11ea-8da6-d64822a2c72a.jpg"  alt="brand logo" />
                    <h1 className=" mx-2 text-3xl font-semibold font-circular italic">Buy Me a Milk</h1>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
