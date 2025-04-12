import { useEffect } from "preact/hooks";
import { useProgressiveNumber } from "src/hooks/useProgressiveNumber";

export const CountUp = (
    { initial, final, duration }: 
    { initial: number, final: number, duration?: number } 
) => {
    const [count, setCount] = useProgressiveNumber(initial, duration)
    
    useEffect(() => {
        setCount(final)
    }, [])

    return <span>{count}</span>;
}