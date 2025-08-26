interface ServiceCardProps {
  service: string;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center border hover:shadow-lg transition duration-300 ease-in-out">
      <h2 className="text-xl font-semibold text-gray-800">{service}</h2>
    </div>
  );
}
