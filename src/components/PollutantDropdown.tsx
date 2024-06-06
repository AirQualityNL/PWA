import { useState } from "react";
import { motion, useCycle } from "framer-motion";

const variants_ul = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const variants_li = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        },
        transitionEnd: { display: "list-item" }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        },
        transitionEnd: { display: "none" }
    }
};

const dropdownOptions = ["PM1", "PM2.5", "PM10", "NO2", "O3"];

function displayPollutant(selectedPollutant: string) {
    switch (selectedPollutant) {
        case "PM1":
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

const PollutantDropdownItem = ({ pollutant, handleSelect }: { pollutant: string, handleSelect: (pollutant: string) => void }) => {
    return (
        <motion.li variants={variants_li}>
            <button className="w-16 h-16 font-bold text-sm m-auto bg-white text-gray-800 rounded-full border" onClick={() => handleSelect(pollutant)} type="button">
                {displayPollutant(pollutant)}
            </button>
        </motion.li>
    );
}

const PollutantDropDown = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const [selectedPollutant, setSelectedPollutant] = useState("PM1");

    const handleSelect = (pollutant: string) => {
        setSelectedPollutant(pollutant);
        toggleOpen();
    }



    return (
        <motion.div initial={false} animate={isOpen ? "open" : "closed"} className="absolute z-20 bottom-16 left-12">
            <motion.ul variants={variants_ul} className="my-2 space-y-2">
                {dropdownOptions.map((pollutant) => (
                    <PollutantDropdownItem key={pollutant} pollutant={pollutant} handleSelect={handleSelect} />
                ))}
            </motion.ul>
            <button className="z-30 w-16 h-16 font-bold text-sm m-auto bg-white text-gray-800 rounded-full border" onClick={() => toggleOpen()} type="button">
                {displayPollutant(selectedPollutant)}
            </button>
        </motion.div>
    );
}

export default PollutantDropDown;