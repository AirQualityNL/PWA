interface PollutantCardProps {
  label: string;
  currentValue: number;
  nextValue: number;
  setCurrentPollutant: (pollutant: string) => void;
  pollutant: string;
  setOpenModal: (open: boolean) => void;
  setOpenDrawer: (open: boolean) => void;
}

function displayPollutantLabel(pollutantKey: string) {
  switch (pollutantKey) {
    case "PM1":
      return <h1 className="text-6xl md:text-7xl p-6">PM<span className="text-5xl">1</span ></h1>
    case "PM2.5":
      return <h1 className="text-6xl md:text-7xl p-6">PM<span className="text-5xl">2.5</span ></h1>
    case "PM10":
      return <h1 className="text-6xl md:text-7xl p-6">PM<span className="text-5xl">10</span ></h1>
    case "NO2":
      return <h1 className="text-6xl md:text-7xl p-6">NO<span className="text-5xl">2</span ></h1>
    case "O3":
      return <h1 className="text-6xl md:text-7xl p-6">O<span className="text-5xl">3</span ></h1>
    default:
      return null;
  }
}

const PollutantCard = ({
  currentValue: current_value,
  nextValue: next_value,
  label,
  setCurrentPollutant,
  pollutant,
  setOpenModal,
  setOpenDrawer,
}: PollutantCardProps) => {
  const clicky = (pollutant: string) => {
    setOpenDrawer(false);
    setOpenModal(true);
    setCurrentPollutant(pollutant);
  };
  return (
    <div className="relative rounded-md bg-slate-900 mx-16 sm:mx-0 h-72 text-gray-200">
      <div className="flex">
        {displayPollutantLabel(label)}
        <svg
          onClick={() => clicky(pollutant)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-14 absolute right-0 m-4 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
      <p className="text-center p-4 text-4xl md:text-5xl">
        {current_value} <span>μg/m³</span>
      </p>
      <p className="absolute bottom-0 right-0 p-4 md:p-6 text-right text-2xl">
        Next hour: {next_value} <span>μg/m³</span>
      </p>
    </div>
  );
};
export default PollutantCard;
