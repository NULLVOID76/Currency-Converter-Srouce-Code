import { useEffect, useState } from "react";
import { InputBox } from "./component";
import useCurrenctInfo from "./useCurrencyInfo";





function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [finalAmount, setFinalAmount] = useState();

  const currencyInfo = useCurrenctInfo(from);

  const option = Object.keys(currencyInfo);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setFinalAmount(amount);
    setAmount(finalAmount);
  };

  const convert = () => {
    setFinalAmount(amount * currencyInfo[to]);
  };

  useEffect(convert,[to]);

  const BackgroundImage =
    "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${BackgroundImage}')` }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={option}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={finalAmount}
                currencyOptions={option}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              {`Convert ${from.toUpperCase()} To ${to.toUpperCase()}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
