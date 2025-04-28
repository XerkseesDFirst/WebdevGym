function PricingComponent({ plan }) {
  return (
    <div className="bg-neutral-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center relative">
      <div className="flex flex-col items-center mb-4">
        <span className="text-3xl font-bold text-[#bfa14a]">{plan.price}</span>
        <span className="text-sm text-neutral-400">/month</span>
      </div>
      <div className="text-xl font-bold text-[#bfa14a] mb-2">{plan.title}</div>
      <ul className="mb-6 flex flex-col gap-2">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-neutral-200">
            <span className="inline-block w-2 h-2 bg-[#bfa14a] rounded-full" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="px-6 py-2 bg-[#bfa14a] text-neutral-900 font-bold rounded-full shadow hover:bg-[#6c5c2b] hover:text-white transition mb-2">ORDER NOW</button>
    </div>
  );
}

export default PricingComponent;