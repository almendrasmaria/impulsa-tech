import Navbar from "../components/Navbar";
import { useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";


interface ContactInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  website: string;
  description: string;
}

const EditProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [contactInfo, setContactInfo] = useState<ContactInfo>(
    location.state || {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      website: "",
      description: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo((prev: ContactInfo) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    navigate("/perfil", { state: contactInfo });
  };

  return (
    <div className="w-full overflow-hidden min-h-screen">
      <Navbar />
      <main className="max-w-[570px] mx-auto px-6 py-8">
        <section className="max-w-[570px] mx-auto">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex items-center gap-2 w-auto h-11 bg-white rounded-md text-gray-600 hover:text-gray-800 transition"
          >
            <LuArrowLeft className="h-5 w-5" />
            <span className="text-sm">Volver</span>
          </button>

          <h2 className="text-[28px] font-semibold text-gray-900 mb-1">Información de contacto</h2>
          <p className="text-sm text-gray-600 mb-6">Completá el formulario a continuación.</p>

          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  name="firstName"
                  value={contactInfo.firstName}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#84B3FF]"
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-1">Apellido</label>
                <input
                  type="text"
                  name="lastName"
                  value={contactInfo.lastName}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#84B3FF]"
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-1">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  value={contactInfo.phone}
                  onChange={handleChange}
                  placeholder="11-4081-3914"
                  className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#84B3FF]"
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={contactInfo.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm bg-gray-50 text-gray-500"
                  disabled
                />
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h3 className="text-[20px] font-semibold text-gray-800">Sobre mí</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-[14px] font-medium text-gray-700 mb-1">Sitio Web</label>
                  <input
                    type="text"
                    name="website"
                    value={contactInfo.website}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#84B3FF]"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-gray-700 mb-1">Descripción</label>
                  <textarea
                    name="description"
                    value={contactInfo.description}
                    onChange={handleChange}
                    placeholder="Escribe una breve descripción sobre ti."
                    className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#84B3FF]"
                    rows={4}
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center justify-center rounded-md bg-[#003B80] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#002a5c] transition"
            >
              Guardar
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default EditProfilePage;