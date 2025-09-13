import ServiceCard from "../component/ServiceCard";

const Service = () => {
  const services = [
    { title: "Steel Supply", desc: "High-quality steel for construction and industry.", icon: "🏭" },
    { title: "Custom Fabrication", desc: "Tailor-made steel products for your needs.", icon: "🔧" },
    { title: "Consulting", desc: "Expert advice for steel projects and management.", icon: "📊" },
  ];

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <ServiceCard key={i} icon={s.icon} title={s.title} desc={s.desc} />
        ))}
      </div>
    </div>
  );
};

export default Service;