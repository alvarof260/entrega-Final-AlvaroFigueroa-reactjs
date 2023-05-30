export const Price = ({price, currentPrice}) => {
    return(
        <div className="flex gap-2 border w-[150px] rounded-full py-1 px-1 justify-center">
            <span>$ {price}</span><span className="font-bold text-mint">{currentPrice}</span>
        </div>
    )
}