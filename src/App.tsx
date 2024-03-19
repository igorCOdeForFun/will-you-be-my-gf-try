"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [

      "Ні",
      "Ти впевнена?",
      "А що якщо я буду дуже гарно просити?",
      "Будь ласка",
      "З шоколадним кексом сверху",
      "А що на рахунок морозива?",
      "БУДЬ ЛАСКА, КОТИКУ",
      "Але :*(",
      "Я помираю",
      "Так, я мертвий",
      "добре, ви розмовляєте з привидом Ігора",
      "будь ласка, КОТЬ",
      ":((((",
      "БУДЬ ЛАСКА, мурка",
      "Я мертвий",
      "Ні :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">Ураааааа!!! Я тебе кохаю дуже сильно ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Станеш моєю дівчиною?????</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Так
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Ні" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
