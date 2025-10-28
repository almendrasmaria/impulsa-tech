import React from 'react';
import Card from '../components/Card';
import PostulantesTable from '../components/PostulantesTable';

const PostulantesTablePage: React.FC = () => {
    return (
        <>
            <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-gray-100 min-h-screen flex items-center justify-center">
                <Card className="w-full max-w-2xl rounded-2xl shadow-sm p-6 gap-4" header="Postulantes" headerClassName="text-left">
                    <PostulantesTable />
                </Card>
            </div>
        </>
    );
};

export default PostulantesTablePage;
