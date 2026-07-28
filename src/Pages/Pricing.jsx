import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      desc: 'Ideal for small projects & freelancers starting out.',
      features: ['Up to 5 Workflows', 'Standard Support', 'Basic Analytics', '1 Team Member'],
      buttonText: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$79',
      period: '/month',
      desc: 'Best for growing businesses needing custom automations.',
      features: ['Unlimited Workflows', 'Priority Support', 'Advanced Analytics', 'Up to 5 Team Members', 'Custom Webhooks'],
      buttonText: 'Start Pro Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      desc: 'Dedicated infrastructure for high-scale operations.',
      features: ['Custom Integrations', '24/7 Dedicated Support', 'Unlimited Team Members', 'SLA Guarantee', 'Dedicated Manager'],
      buttonText: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-100 mb-3">Simple & Transparent Pricing</h2>
        <p className="text-slate-400">Choose the plan that fits your business needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-8 rounded-2xl border flex flex-col justify-between ${
              plan.popular
                ? 'bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-950/50 relative'
                : 'bg-slate-900/50 border-slate-800'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-xs font-semibold px-3 py-1 rounded-full text-white">
                Most Popular
              </span>
            )}
            <div>
              <h3 className="text-xl font-bold text-slate-100">{plan.name}</h3>
              <p className="text-slate-400 text-sm mt-2">{plan.desc}</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold text-slate-100">{plan.price}</span>
                <span className="text-slate-400 text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                    <span className="text-indigo-400">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/contact"
              className={`w-full text-center py-3 rounded-lg font-medium transition-all ${
                plan.popular
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
              }`}
            >
              {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}