import PricingComponent from '../components/PricingComponent';

const defaultPlans = [
  {
    title: 'Basic',
    price: '₱999',
    features: ['Access to gym equipment', '1 group class/week', 'Locker room'],
  },
  {
    title: 'Standard',
    price: '₱1,499',
    features: ['All Basic features', '3 group classes/week', 'Free gym shirt'],
  },
  {
    title: 'Premium',
    price: '₱2,499',
    features: ['All Standard features', 'Unlimited classes', 'Personal trainer'],
  },
];

function Pricing() {
  return (
    <div className="w-full bg-gradient-to-b from-neutral-900 to-neutral-800 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#bfa14a] text-center mb-8 tracking-tight drop-shadow">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {defaultPlans.map((plan, idx) => (
            <PricingComponent
              key={idx}
              plan={plan}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;