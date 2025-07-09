export default function Cart() {
    return (
        <section className="w-full bg-white px-8 py-9 dark:bg-[#0A2025]">
            <h1 className="text-center text-[32px] leading-[38px] font-semibold text-[#191919] dark:text-white">My Shopping Cart</h1>
            <div className="mt-8 flex items-start gap-6">
                <div className="w-[800px] rounded-xl bg-white p-4">
                    <table className="w-full rounded-xl bg-white">
                        <thead>
                            <tr className="w-full border-b border-gray-400 text-center text-sm leading-[14px] font-medium tracking-wide text-[#7f7f7f] uppercase">
                                <th className="px-2 py-2 text-left">Product</th>
                                <th className="px-2 py-2">price</th>
                                <th className="px-2 py-2">Quantity</th>
                                <th className="px-2 py-2">Subtotal</th>
                                <th className="w-7 px-2 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td className="px-2 py-2 text-left align-top">
                                    <img src="https://iili.io/3FqLBsI.png" alt="test" className="mr-2 inline-block h-[100px] w-[100px]" />
                                    <span>Green Capsicum</span>
                                </td>
                                <td className="px-2 py-2">$14.00</td>
                                <td className="mt-9 flex items-center justify-around rounded-[170px] border border-[#a0a0a0] bg-white p-2">
                                    <svg
                                        width="14"
                                        height="15"
                                        className="cursor-pointer"
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.33398 7.5H11.6673"
                                            stroke="#666666"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                    <span className="w-10 text-center text-base leading-normal font-normal text-[#191919]">5</span>
                                    <svg
                                        className="relative cursor-pointer"
                                        width="14"
                                        height="15"
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.33398 7.49998H11.6673M7.00065 2.83331V12.1666V2.83331Z"
                                            stroke="#1A1A1A"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </td>
                                <td className="px-2 py-2">$70.00</td>
                                <td className="px-2 py-2">
                                    <svg
                                        width="24"
                                        className="cursor-pointer"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z"
                                            stroke="#CCCCCC"
                                            stroke-miterlimit="10"
                                        ></path>
                                        <path
                                            d="M16 8.5L8 16.5"
                                            stroke="#666666"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M16 16.5L8 8.5"
                                            stroke="#666666"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr className="text-center">
                                <td className="px-2 py-2 text-left align-top">
                                    <img src="https://iili.io/3FqLBsI.png" alt="test" className="mr-2 inline-block h-[100px] w-[100px]" />
                                    <span>Green Capsicum</span>
                                </td>
                                <td className="px-2 py-2">$14.00</td>
                                <td className="mt-9 flex items-center justify-around rounded-[170px] border border-[#a0a0a0] bg-white p-2">
                                    <svg
                                        width="14"
                                        height="15"
                                        className="cursor-pointer"
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.33398 7.5H11.6673"
                                            stroke="#666666"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                    <span className="w-10 text-center text-base leading-normal font-normal text-[#191919]">5</span>
                                    <svg
                                        className="relative cursor-pointer"
                                        width="14"
                                        height="15"
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.33398 7.49998H11.6673M7.00065 2.83331V12.1666V2.83331Z"
                                            stroke="#1A1A1A"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </td>
                                <td className="px-2 py-2">$70.00</td>
                                <td className="px-2 py-2">
                                    <svg
                                        width="24"
                                        className="cursor-pointer"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z"
                                            stroke="#CCCCCC"
                                            stroke-miterlimit="10"
                                        ></path>
                                        <path
                                            d="M16 8.5L8 16.5"
                                            stroke="#666666"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M16 16.5L8 8.5"
                                            stroke="#666666"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr className="text-center">
                                <td className="px-2 py-2 text-left align-top">
                                    <img src="https://iili.io/3FqLBsI.png" alt="test" className="mr-2 inline-block h-[100px] w-[100px]" />
                                    <span>Green Capsicum</span>
                                </td>
                                <td className="px-2 py-2">$14.00</td>
                                <td className="mt-9 flex items-center justify-around rounded-[170px] border border-[#a0a0a0] bg-white p-2">
                                    <svg
                                        width="14"
                                        height="15"
                                        className="cursor-pointer"
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.33398 7.5H11.6673"
                                            stroke="#666666"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                    <span className="w-10 text-center text-base leading-normal font-normal text-[#191919]">5</span>
                                    <svg
                                        className="relative cursor-pointer"
                                        width="14"
                                        height="15"
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.33398 7.49998H11.6673M7.00065 2.83331V12.1666V2.83331Z"
                                            stroke="#1A1A1A"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </td>
                                <td className="px-2 py-2">$70.00</td>
                                <td className="px-2 py-2">
                                    <svg
                                        width="24"
                                        className="cursor-pointer"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z"
                                            stroke="#CCCCCC"
                                            stroke-miterlimit="10"
                                        ></path>
                                        <path
                                            d="M16 8.5L8 16.5"
                                            stroke="#666666"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M16 16.5L8 8.5"
                                            stroke="#666666"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="border-t border-gray-400">
                                <td className="px-2 py-2" colSpan={3}>
                                    <button className="className cursor-pointer rounded-[43px] bg-[#f2f2f2] px-8 py-3.5 text-sm leading-[16px] font-semibold text-[#4c4c4c]">
                                        Return to shop
                                    </button>
                                </td>
                                <td className="px-2 py-2" colSpan={2}>
                                    <button className="className cursor-pointer rounded-[43px] bg-[#f2f2f2] px-8 py-3.5 text-sm leading-[16px] font-semibold text-[#4c4c4c]">
                                        Update Cart
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="w-[424px] rounded-lg bg-white p-6">
                    <h2 className="mb-2 text-xl leading-[30px] font-medium text-[#191919]">Cart Total</h2>
                    <div className="flex w-[376px] items-center justify-between py-3">
                        <span className="text-base leading-normal font-normal text-[#4c4c4c]">Total:</span>
                        <span className="text-base leading-tight font-semibold text-[#191919]">$84.00</span>
                    </div>
                    <div className="flex w-[376px] items-center justify-between py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)]">
                        <span className="text-sm leading-[21px] font-normal text-[#4c4c4c]">Shipping:</span>
                        <span className="text-sm leading-[21px] font-medium text-[#191919]">Free</span>
                    </div>
                    <div className="flex w-[376px] items-center justify-between py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)]">
                        <span className="text-sm leading-[21px] font-normal text-[#4c4c4c]">Subtotal:</span>
                        <span className="text-sm leading-[21px] font-medium text-[#191919]">$84.00</span>
                    </div>
                    <button className="mt-5 w-[376px] gap-4 rounded-[44px] bg-[#00b206] px-10 py-4 text-base leading-tight font-semibold text-white">
                        Proceed to checkout
                    </button>
                </div>
            </div>
            <div className="mt-6 inline-flex w-[800px] items-center justify-start gap-6 rounded-lg border border-[#e6e6e6] bg-white p-5">
                <h3 className="className w-1/4 text-xl leading-[30px] font-medium text-[#191919]">Coupon Code</h3>
                <div className="w-full border border-[#e6e6e6]">
                    <input
                        placeholder="Enter code"
                        type="text"
                        className="w-2/3 rounded-[46px] bg-white px-6 py-3.5 text-base leading-normal font-normal text-[#999999] outline-none"
                    />
                    <button className="rounded-[43px] bg-[#333333] px-10 py-4 text-base leading-tight font-semibold text-white">Apply Coupon</button>
                </div>
            </div>
        </section>
    );
}
