import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import { LuArrowRight, LuMail, LuPhone, LuLink } from "react-icons/lu";


const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate(); 

  const [contactInfo, setContactInfo] = useState(location.state || {
    firstName: "María",
    lastName: "Almendras",
    phone: "11 4081-3914",
    email: "almendrasmery@gmail.com",
    website: "https://miportfolio.dev",
    description: "Soy una desarrolladora web apasionada por crear soluciones innovadoras y funcionales...",
  });

  useEffect(() => {
    if (location.state) {
      setContactInfo(location.state);
    }
  }, [location.state]);

  const initials = `${contactInfo.firstName[0]}${contactInfo.lastName[0]}`.toUpperCase();

  return (
    <div className="w-full overflow-hidden min-h-screen">
      <Navbar />
      <main className="max-w-[570px] mx-auto px-6 py-8">
        <section className="max-w-[570px] mx-auto">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigate("/perfil/editar", { state: contactInfo })}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <span className="text-sm">Editar</span>
              <LuArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center mt-8">
            <div className="flex-1">
              <h2 className="text-4xl font-semibold text-gray-900">{`${contactInfo.firstName} ${contactInfo.lastName}`}</h2>
            </div>
            <div className="ml-4 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gray-800 text-white flex items-center justify-center text-xl font-bold">
                {initials}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm text-gray-600 flex items-center gap-2">
              <LuMail className="text-gray-500" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
              <LuPhone className="text-gray-500" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
              <LuLink className="text-gray-500" />
              <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                {contactInfo.website}
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p>{contactInfo.description}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-[20px] font-semibold text-gray-900">Mi Curriculum</h3>
            <button type="button" className="mt-2 w-full text-[#003B80] border border-[#003B80] rounded-md py-2 px-4 hover:bg-blue-50 transition">
              Subir CV
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;




