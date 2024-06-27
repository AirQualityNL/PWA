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
      {demoData !== null && (
        <>
          {Object.entries(pollutantOptions).map(([key, _]) => {
            return (
              <PollutantCard
                currentValue={demoData[key][0]}
                nextValue={demoData[key][1]}
                key={key}
                pollutant={key}
                setOpenModal={setOpenModal}
                setOpenDrawer={setOpenDrawer}
                setCurrentPollutant={setCurrentPollutant}
                label={key}
              />
            );
          })}
        </>
      )}
    </section>
  );
};

export default PolutantsSection;
