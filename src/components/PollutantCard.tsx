import { ReactElement } from "react";

interface PollutantCardProps {
    label: ReactElement;
    value: number;
}

const PollutantCard = ({ value, label }: PollutantCardProps) => {
    return (
        <div className="relative rounded-md bg-slate-900 mx-16 sm:mx-0 h-72 text-white">
            {label}
            <p className="absolute bottom-0 right-0 p-6 text-right text-5xl">{value} <span>μg/m³</span></p>
        </div>
    );
}
export default PollutantCard;