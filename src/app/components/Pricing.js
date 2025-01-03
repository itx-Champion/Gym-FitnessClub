'use client';

import { FaCheckCircle } from 'react-icons/fa';

const Pricing = () => {
  const plans = [
    {
      title: "Cours Collectifs (60 min)",
      prices: [
        { frequency: "1 fois/semaine", price: "2,800 DA" },
        { frequency: "2 fois/semaine", price: "4,000 DA" },
        { frequency: "Forfait annuel", price: "28,600 DA" },
      ],
    },
    {
      title: "Cardio/Musculation (90 min)",
      prices: [
        { frequency: "3 fois/semaine", price: "12,800 DA" },
        { frequency: "Forfait mensuel", price: "10,000 DA" },
        { frequency: "Forfait annuel", price: "54,000 DA" },
      ],
    },
    {
      title: "Tarifs Enfants",
      prices: [
        { frequency: "1 fois/semaine", price: "2,000 DA" },
        { frequency: "2 fois/semaine", price: "2,800 DA" },
        { frequency: "3 fois/semaine", price: "3,500 DA" },
      ],
    },
  ];

  return (
    <div id="pricing" className="bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-8 text-center animate__animated animate__pulse animate__duration-500">
        Tarifs
      </h1>
      <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp animate__duration-500`}
            style={{ animationDelay: `${index * 0.3}s` }} // Ajout du délai pour chaque carte
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">{plan.title}</h2>
              <ul className="space-y-3">
                {plan.prices.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.frequency}</span>
                    <span className="text-yellow-400 font-semibold">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-400 text-black text-center py-3 font-semibold cursor-pointer hover:bg-yellow-500 transition">
              S'inscrire
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
