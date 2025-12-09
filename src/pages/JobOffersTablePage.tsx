import React from 'react';
import JobOffersTable from '../components/JobOffersTable';

const JobOffersTablePage: React.FC = () => {
    return (
        <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-[#FAFDFF] min-h-screen flex items-center justify-center">
            <JobOffersTable />
        </div>
    );
};

export default JobOffersTablePage;
