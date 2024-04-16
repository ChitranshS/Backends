export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    let color 
    switch(title)
    {
        case "Total amount":color = "bg-blue-200"
        break
        case "Amount Recieved":color = "bg-lime-100	"
        break
        case "Pending":color = "bg-red-100"
        break
        default:color = "bg-white-500"
    }
   
    const base = `${color} shadow-lg p-6 rounded-xl m-2  hover:pl-8 duration-200`

    return (
        <div className={base}>
            <div className="flex ">
            <div className=" text-md md:text-lg pb-2 text-gray-700">{title}</div>
                <div className="ml-1 pt-0.2 align-self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-between text-center"><div className=" text-3xl font-semibold">Rs.{amount}</div><div className="flex text-md mt-2 text-blue-600 underline">{orderCount} order{orderCount>1 && "s"} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</div></div>
        </div>
    )
}