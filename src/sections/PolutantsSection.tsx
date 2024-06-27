import PollutantCard from "@/components/PollutantCard";
import DemoContext from "@/hook/demoContext";
import { useContext } from "react";

const PolutantsSection = ({
  setCurrentPollutant,
  pollutantOptions,
  setOpenModal,
  setOpenDrawer,
}: any) => {

  const { demoData } = useContext(DemoContext);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-auto">
      {Object.entries(pollutantOptions).map(([key, value]) => {
        return (
          <PollutantCard
            currentValue={42.69}
            nextValue={133.7}
            key={key}
            pollutant={key}
            setOpenModal={setOpenModal}
            setOpenDrawer={setOpenDrawer}
            setCurrentPollutant={setCurrentPollutant}
            label={key}
          />
        );
      })}
    </section>
  );
};

export default PolutantsSection;
