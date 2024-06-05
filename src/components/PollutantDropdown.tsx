import { useState } from "react";

const PollutantDropDown = () => {
    const [open, setOpen] = useState(false);
    const [selectedPollutant, setSelectedPollutant] = useState("PM1.0");

    const handleSelect = (pollutant: string) => {
        setSelectedPollutant(pollutant);
        setOpen(false);
    }

    function displayPollutantNumber() {
        switch (selectedPollutant) {
            case "PM1.0":
                return <div>PM<span className="align-sub">1</span></div>;
            case "PM2.5":
                return <div>PM<span className="align-sub">5</span></div>;
            case "PM10":
                return <div>PM<span className="align-sub">10</span></div>;
            case "NO2":
                return <div>NO<span className="align-sub">2</span></div>;
            case "O3":
                return <div>O<span className="align-sub">3</span></div>;
            default:
                return null;
        }
    }

    return (
        <div className="absolute z-20 bottom-16 left-12">
            {open && (
                <div className="my-2">
                    <ul className="space-y-2">
                        <li>
                            <button className="w-16 h-16 font-bold text-sm m-auto bg-white text-gray-800 rounded-full border" onClick={() => handleSelect("PM1.0")} type="button">PM<span className="align-sub">1</span> </button>
                        </li>
                        <li>
                            <button className="w-16 h-16 font-bold text-sm m-auto bg-white text-gray-800 rounded-full border" onClick={() => handleSelect("PM2.5")} type="button">PM<span className="align-sub">5</span></button>
                        </li>
                        <li>
                            <button className="w-16 h-16 font-bold text-sm m-auto bg-white text-gray-800 rounded-full border" onClick={() => handleSelect("PM10")} type="button">PM<span className="align-sub">10</span></button>
                        </li>
                        <li>
                            <button className="w-16 h-16 font-bold text-sm m-auto bg-white text-gray-800 rounded-full border" onClick={() => handleSelect("NO2")} type="button">N<span className="align-sub">2</span></button>
                        </li>
                        <li>
                            <button className="w-16 h-16 font-bold text-sm m-auto bg-white text-gray-800 rounded-full border" onClick={() => handleSelect("O3")} type="button">O<span className="align-sub">3</span></button>
                        </li>
                    </ul>
                </div>
            )}
            <button className="w-16 h-16 font-bold text-sm m-auto bg-white text-gray-800 rounded-full border" onClick={() => setOpen(!open)} type="button">
                {displayPollutantNumber()}
            </button>
        </div>
    );
}

export default PollutantDropDown;