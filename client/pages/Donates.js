import React, {useState, useEffect } from 'react'
import { ethers } from 'ethers';

const Donates = ({state}) => {
    const [donates, setDonnates] = useState([]);
    const {contract} = state;
    let donation;

    useEffect(() => {
            const donateMessage = async () => {
            const donates  = await contract.getDonners();
            setDonnates(donates);
        };
        contract && donateMessage();
    }, [contract]);

    return (
        <section className="mx-auto mt-12 md:mt-20 text-center bg-yellow-200 py-3">
            <p className="font-bold text-center md:max-w-2xl md:mx-auto my-6 text-lg md:text-5xl text-gray-800 leading-normal">
                Supporters
            </p>
            {donates.map((donate) => {
                return (
                <div
                    className="flex flex-col items-center justify-between py-2 px-5 mx-auto my-2 w-full "
                    key={Math.random()}
                >
                    <table>
                    <tbody>
                        <tr className="bg-orange-200 rounded-full">
                        <td className=" px-3 py-4 mx-2 my-2 w-1/4 border border-collapse border-spacing-4 border-black">
                            {donate.name}
                        </td>
                        <td className=" px-3 py-4 mx-2 my-2 w-1/4 border border-collapse border-spacing-4 border-black">
                            {/* {new Date(memo.timestamp * 1000).toLocaleString()} */}
                            {
                                donation  = ethers.utils.formatEther(donate.value)
                            }
                        </td>
                        <td className=" px-3 py-4 mx-2 my-2 w-1/4 border border-collapse border-spacing-4 border-black">
                            {donate.message}
                        </td>
                        <td className=" px-3 py-4 mx-2 my-2 w-1/4 border border-collapse border-spacing-4 border-black">
                            {donate.tipper}
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                );
            })}
            </section>
    )
}

export default Donates