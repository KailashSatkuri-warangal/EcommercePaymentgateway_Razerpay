const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

export default ServiceCard;