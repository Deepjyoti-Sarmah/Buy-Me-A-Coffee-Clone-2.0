import { ethers } from "ethers";

const Buy = ({ state }) => {
    const buyCoffee = async (event) => {
        event.preventDefault();

        const {contract } = state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        const price = document.querySelector("#amount").value;
        console.log(name, message, contract);
        // const amount = { value: ethers.utils.parseEther("0.001") };
        const amount = {value: ethers.utils.parseEther(price.toString())};
        const transaction = await contract.buyCoffee(name, message, amount);
        await transaction.wait();
        console.log("transaction is done");
    };

    return (
        <>
        <section className=" mx-auto mt-12 md:mt-20 text-center w-full">
        <div className="py-16 text-black px-4 bg-orange-200">
            <form onSubmit={buyCoffee}>
                <div className="my-4">
                    <label className="mx-2 my-4 flex items-center justify-center text-center ">Name</label>
                    <div className="flex items-center justify-center py-4">
                        <input id="name"
                        className="p-3 flex rounded-md text-black text-center w-1/3"
                        type="text"
                        placeholder="Enter your Name"
                        />
                    </div>
                    <label className="mx-2 my-4  mt-3 flex items-center justify-center text-center">
                        Message
                    </label>
                    <div className="flex items-center justify-center py-4 ">
                        <input id="message"
                        className="p-4 flex rounded-md text-black text-center w-1/3"
                        type="text"
                        placeholder="Enter your Message"
                        />
                    </div>
                    <label className="mx-2 my-4  mt-3 flex items-center justify-center text-center">
                        Amount
                    </label>
                    <div className="flex items-center justify-center py-4 ">
                        <input id="amount"
                        className="p-4 flex rounded-md text-black text-center w-1/3"
                        type= "text"
                        placeholder="Enter amount in ETH"
                        />
                    </div>
                    <div className="flex items-center justify-center my-10 py-4 md:drop-shadow-lg tracking-wider ">
                        <button disabled = {!state.contract} type= "submit" className="bg-[#96D4D4] hover:bg-[#59a5a5] hover:text-white rounded-full w-[20%] my-2 py-2 md:text-xl">
                            {" "}
                            Donate
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </section>
        </>
    );
};

export default Buy;