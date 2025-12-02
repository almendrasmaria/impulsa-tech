import { LuShare2 } from "react-icons/lu";

interface OpportunityCardProps {
  companyLogo?: string;
  position?: string;
  companyName?: string;
  location?: string;
  schedule?: string;
  modality?: string;
  description?: string;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  companyLogo = "images/logo-corteva.png",
  position = "Programador/a Jr",
  companyName = "Corteva Agriscience",
  location = "Capital Federal",
  schedule = "Full-Time",
  modality = "Híbrido",
  description = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
}) => {
  return (
    <article className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 transition hover:shadow-md">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <img
            src={companyLogo}
            alt={companyName}
            className="w-12 h-12 rounded-xl object-contain bg-white"
          />

          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              {position}
            </h3>
            <p className="text-sm text-gray-600">{companyName}</p>
          </div>
        </div>

        <button className="text-gray-400 hover:text-[#003B80] transition self-start">
          <LuShare2 size={22} />
        </button>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <span className="text-xs px-3 py-1 rounded-full bg-[#E8F7FF] text-[#003B80]">
          {location}
        </span>

        <span className="text-xs px-3 py-1 rounded-full bg-[#E3F7EE] text-[#2F9E44]">
          {schedule}
        </span>

        <span className="text-xs px-3 py-1 rounded-full bg-[#FFF2D9] text-[#C27C2C]">
          {modality}
        </span>
      </div>

      <p className="text-sm text-gray-600 mt-4 leading-relaxed line-clamp-2">
        {description}
      </p>

      <div className="mt-6">
        <button className="bg-[#003B80] hover:bg-[#002a5c] text-white w-full py-2.5 rounded-full text-sm font-medium transition">
          Aplicar
        </button>
      </div>
    </article>
  );
};

export default OpportunityCard;
