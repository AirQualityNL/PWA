import PollutantCard from "@/components/PollutantCard";

const PolutantsSection = ({
  setCurrentPollutant,
  pollutantOptions,
  setOpenModal,
  setOpenDrawer,
}: any) => {
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
            label={<h1 className="text-6xl md:text-7xl p-6">{key}</h1>}
          />
        );
      })}
    </section>
  );
};

export default PolutantsSection;
