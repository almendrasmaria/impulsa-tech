import { Navbar, SearchBar } from "../components";

const OpportunitiesPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <header>
        <Navbar variant="light" />
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold text-[#1A1A1A] mb-6">
          Oportunidades
        </h1>

        <SearchBar variant="light"/>

      </main>
    </div>
  );
};

export default OpportunitiesPage;
