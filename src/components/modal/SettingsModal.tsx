import { useState } from "react";
type ModalUIProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  pollutantName: string;

  pollutantSpecifics: {
    lowValue: number;
    midValue: number;
    highValue: number;
    standardValue: number;
  };
};

const ModalUI = ({
  open,
  setOpen,
  pollutantName,
  pollutantSpecifics,
}: ModalUIProps) => {
  const [sliderValue, setSliderValue] = useState(
    pollutantSpecifics.standardValue
  );

  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [customRangeEnabled, setCustomRangeEnabled] = useState(true);

  const totalpollutantValue = pollutantSpecifics.highValue;

  const enableNotification = () => {
    setNotificationEnabled(true);
    Notification.requestPermission().then((permission) => {
      console.log(permission);
      if (permission === "granted") {
        console.log("notification enabled");
      } else {
        setNotificationEnabled(false);
      }
    });
  };

  return (
    <>
      {open ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">{pollutantName}</h3>
              </div>
              <div className="flex relative p-6 flex-col">
                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  Set notification settings for {pollutantName} at concentration
                  levels
                </p>
                <label className="inline-flex items-center cursor-pointer p-2">
                  <input
                    type="checkbox"
                    checked={notificationEnabled}
                    onChange={() => enableNotification()}
                    className="sr-only peer"
                  />
                  <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Enable notifications
                  </span>
                </label>
                <label className="inline-flex items-center cursor-pointer p-2">
                  <input
                    type="checkbox"
                    onChange={(e) => setCustomRangeEnabled(e.target.checked)}
                    checked={customRangeEnabled}
                    className="sr-only peer"
                  />
                  <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Set custom range
                  </span>
                </label>
                <div className="relative mb-6">
                  <label className="sr-only">slider</label>
                  <input
                    id="labels-range-input"
                    type="range"
                    min="0"
                    max={pollutantSpecifics.highValue}
                    disabled={!customRangeEnabled}
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
                    style={{
                      background: `linear-gradient(to right,
                          green 0%,
                          yellow ${
                            (pollutantSpecifics.lowValue /
                              totalpollutantValue) *
                            100
                          }%,
                          yellow ${
                            (pollutantSpecifics.midValue /
                              totalpollutantValue) *
                            100
                          }%,
                          red 100%)`,
                    }}
                  />
                </div>
                <div
                  className={`text-center ${
                    sliderValue >= pollutantSpecifics.midValue
                      ? "text-red-500"
                      : sliderValue >= pollutantSpecifics.lowValue
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  <p className="text-xl">{sliderValue} µg/m3 </p>
                </div>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      ;
    </>
  );
};

export default ModalUI;
