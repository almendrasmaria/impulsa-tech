import { Navbar, SearchBar, OpportunityCard } from "../components";

const OpportunitiesPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar variant="light" />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6 lg:hidden">
          <SearchBar />
        </div>

        <div className="flex flex-col gap-6">
          <div className="mb-2 hidden lg:block">
            <SearchBar />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <OpportunityCard />
            <OpportunityCard />
            <OpportunityCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default OpportunitiesPage;

