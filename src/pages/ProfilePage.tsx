import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LuArrowRight,
  LuMail,
  LuPhone,
  LuLink,
  LuFileText,
  LuEllipsisVertical,
} from "react-icons/lu";

const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [contactInfo, setContactInfo] = useState(
    location.state || {
      firstName: "María",
      lastName: "Almendras",
      phone: "11 4081-3914",
      email: "almendrasmery@gmail.com",
      website: "https://miportfolio.dev",
      description:
        "Soy una desarrolladora web apasionada por crear soluciones innovadoras y funcionales...",
    }
  );

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setCvFile(file);
      setIsMenuOpen(false);
    }
  };

  const handleDownload = () => {
    if (!cvFile) return;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(cvFile);
    link.download = cvFile.name;
    link.click();
    setIsMenuOpen(false);
  };

  const handleDelete = () => {
    setCvFile(null);
    setIsMenuOpen(false);
  };

  const handleReplace = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setCvFile(file);
      setIsMenuOpen(false);
    }
  };

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
              <h2 className="text-4xl font-semibold text-gray-900">
                {`${contactInfo.firstName} ${contactInfo.lastName}`}
              </h2>
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
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                {contactInfo.website}
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p>{contactInfo.description}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-[20px] font-semibold text-gray-900">
              Mi Curriculum
            </h3>

            {cvFile ? (
              <div className="mt-3 flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-[#003B80]/20 bg-[#E8F0FF]">
                    <LuFileText className="h-5 w-5 text-[#003B80]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900 truncate max-w-[240px]">
                      {cvFile.name}
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <LuEllipsisVertical className="h-4 w-4" />
                  </button>

                  {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg z-10">
                      <button
                        type="button"
                        className="w-full text-left text-gray-700 text-sm py-2 px-4 hover:bg-gray-100"
                        onClick={handleDownload}
                      >
                        Descargar
                      </button>
                      <label
                        htmlFor="cv-replace"
                        className="block w-full text-gray-700 text-sm py-2 px-4 hover:bg-gray-100 cursor-pointer"
                      >
                        Reemplazar
                        <input
                          id="cv-replace"
                          type="file"
                          accept=".pdf"
                          className="hidden"
                          onChange={handleReplace}
                        />
                      </label>
                      <button
                        type="button"
                        className="w-full text-left text-red-600 text-sm py-2 px-4 hover:bg-gray-100"
                        onClick={handleDelete}
                      >
                        Eliminar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="relative mt-3">
                <button
                  type="button"
                  className="w-full text-[#003B80] border border-[#003B80] rounded-md py-2 px-4 hover:bg-blue-50 transition"
                >
                  Subir CV
                </button>
                <input
                  type="file"
                  accept=".pdf"
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  onChange={handleFileChange}
                />
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;