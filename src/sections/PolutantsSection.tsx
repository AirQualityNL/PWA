import PollutantCard from "@/components/PollutantCard";

const PolutantsSection = () => {
  return <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-auto">
    <PollutantCard currentValue={42.69} nextValue={133.7} label={<h1 className="text-7xl p-6">PM<span className="text-5xl">1</span ></h1>} />
    <PollutantCard currentValue={42.69} nextValue={133.7} label={<h1 className="text-7xl p-6">PM<span className="text-5xl">2.5</span ></h1>} />
    <PollutantCard currentValue={42.69} nextValue={133.7} label={<h1 className="text-7xl p-6">PM<span className="text-5xl">10</span ></h1>} />
    <PollutantCard currentValue={42.69} nextValue={133.7} label={<h1 className="text-7xl p-6">O<span className="text-5xl">3</span ></h1>} />
    <PollutantCard currentValue={42.69} nextValue={133.7} label={<h1 className="text-7xl p-6">NO<span className="text-5xl">2</span ></h1>} />
  </section>;
};

export default PolutantsSection;
