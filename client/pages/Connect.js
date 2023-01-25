import React from "react";
import { useState, useEffect } from "react";

const Connect = ({state}) => {

    const [donate, setDonate] = useState([]);
    const {contract} = state;

    useEffect(() => {
        const donateMessage = async () => {
            const donate = await contract.getDonners();
            setDonate(donate);
        };
        contract && donateMessage();
    }, [contract]);



    return (
        <>
        <section className="my-10 mx-10 sm:mt-10 md:drop-shadow-lg tracking-wider flex items-center justify-center ">
        <div className="px-4 sm:py-4 md:px-8 my-20 mx-24 text-center rounded-full bg-yellow-200  w-2/3 ">
            {donate.map((donate) => {
                return (
                    <span key={Math.random} className="font-circular text-l font-semibold text-gray-600 leading-normal">
                        connected account :- {donate.name}
                    </span>
                )
            })}
        </div>
        </section>
        </>
    );
};

export default Connect;
