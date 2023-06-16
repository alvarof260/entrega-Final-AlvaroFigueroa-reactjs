export const Price = ({price, currentPrice}) => {
    return(
        <div className="flex gap-2 border w-auto max-w-[160px] rounded-full py-1 px-1 justify-center" title={`$${price}`}>
            <span>$ {price}</span><span className="font-bold text-mint">{currentPrice}</span>
        </div>
    )
}