import { useEffect, useState } from "react";
import { Navbar, SearchBar, OpportunityCard } from "../components";
import { opportunities } from "../data/opportunities";

const OpportunitiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [filteredOpportunities, setFilteredOpportunities] =
    useState(opportunities);

  const handleSearchSubmit = () => {
    const filtered = opportunities.filter((job) => {
      const matchesPosition = job.position
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesLocation = selectedLocation
        ? job.location === selectedLocation
        : true;

      return matchesPosition && matchesLocation;
    });
    setFilteredOpportunities(filtered);
  };

  useEffect(() => {
    handleSearchSubmit();
  }, [selectedLocation]);

  return (
    <div className="w-full overflow-hidden">
      <Navbar variant="light" />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold text-[#1A1A1A] mb-6">
          Oportunidades
        </h1>

        <section className="mt-8 grid gap-6 lg:grid-cols-[280px,1fr] lg:items-start">
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div className="mb-6 lg:hidden">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onSearchSubmit={handleSearchSubmit}
                selectedLocation={selectedLocation}
                onLocationChange={setSelectedLocation}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              {filteredOpportunities.map((job) => (
                <OpportunityCard
                  key={job.id}
                  companyLogo={job.companyLogo}
                  position={job.position}
                  companyName={job.companyName}
                  location={job.location}
                  schedule={job.schedule}
                  modality={job.modality}
                  description={job.description}
                />
              ))}
            </div>
          </div>

          <div className="mb-2 hidden lg:block">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onSearchSubmit={handleSearchSubmit}
              selectedLocation={selectedLocation}
              onLocationChange={setSelectedLocation}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default OpportunitiesPage;
