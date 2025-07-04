import { FaTruck, FaHandshake, FaUndoAlt, FaLock } from "react-icons/fa";

const features = [
  {
    icon: FaTruck,
    title: "Free Shipping",
    desc: "Free shipping on all US orders or orders above $200",
  },
  {
    icon: FaHandshake,
    title: "24x7 Support",
    desc: "Contact us 24 hours live support, 7 days in a week",
  },
  {
    icon: FaUndoAlt,
    title: "30 Days Return",
    desc: "Simply return it within 30 days for an exchange",
  },
  {
    icon: FaLock,
    title: "Payment Secure",
    desc: "Contact us 24 hours live support, 7 days in a week",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-[#f3f6fa] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white px-4 py-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <Icon className="mx-auto mb-5 text-4xl text-[#3864ff]" />

              <h3 className="mb-2 text-lg font-semibold text-[#313b50]">
                {title}
              </h3>
              <p className="text-[#777] leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
