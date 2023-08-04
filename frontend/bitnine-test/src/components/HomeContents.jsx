import React from 'react'

const HomeContents = () => {
    return (
        <div className="flex flex-col items-center bg-blue-50 p-20">
            <img className="mb-12" src="https://bitnine.net/wp-content/uploads/2022/04/img_diagram_eng-e1651143428347.png"></img>
            <div className="w-screen bg-white m-8">
                <h1 className="text-3xl font-bold mt-16">Key features</h1>
                <p className="text-lg text-gray-500">Manage your data with Agens Enterprise Package</p>
                <p className="text-lg text-gray-500">Essential enterprise features such as high availability and sharding are provided</p>
                <div className="w-fit p-12">
                    <img className="my-12" src="https://bitnine.net/wp-content/uploads/2022/04/img_key-features_eng.png"></img>
                </div>
            </div>
            <div>
                <h1 className="text-4xl font-bold mt-16">AgensSQL DB Engine</h1>
                <p className="text-2xl text-gray-600 font-bold underline m-4">Enhanced Data Security</p>
                <p className="text-lg text-gray-500 mt-8">AgensSQL is a PostgreSQL-based DBMS</p>
                <p className="text-lg text-gray-500 mb-4">that guarantees optimal security and stability.</p>
                <div className="flex flex-row items-center my-8 ">
                    <div className="card w-80 bg-base-100 shadow-xl mx-4 static">
                        <figure><img src="https://bitnine.net/wp-content/uploads/2022/04/Password-Profile.png" /></figure>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl mx-4 static">
                        <figure><img src="https://bitnine.net/wp-content/uploads/2022/04/Data-Redaction.png" /></figure>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl mx-4 static">
                        <figure><img src="https://bitnine.net/wp-content/uploads/2022/04/Auditing.png" /></figure>
                    </div>
                </div>
            </div>
            <div className="w-screen h-screen bg-white m-8">
                <h1 className="text-3xl font-bold mt-16">Agens Enterprise Package</h1>
                <p className="text-lg text-gray-500 mt-8">Agens Enterprise Package comes with a high availability management server that</p>
                <p className="text-lg text-gray-500">supports backup and data monitoring dashboard that helps enterprise customers manage their data efficiently.</p>
                <div className="flex flex-row items-stretch bg-white">
                    <div className="flex flex-col items-center w-full">
                        <h1 className="text-xl font-bold mt-16">Agens HA Manager</h1>
                        <div className="flex flex-row items-stretch">
                            <p className="text-xl font-bold text-blue-700 mt-8">HA Clustering</p>
                            <p className="text-xl text-gray-700 ml-1 mt-8">– Failover/Failback, Load-balancing</p>
                        </div>
                        <img className="mt-2 p-8" src="https://bitnine.net/wp-content/uploads/2022/04/img_AHM_eng-1024x922.png"></img>
                        <h1 className="text-xl font-bold">Replication</h1>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <h1 className="text-xl font-bold mt-16">Agens Enterprise Manager</h1>
                        <div className="card w-96 h-22 bg-white text-blue-400 border-blue-400 border-2 mt-8 p-0 static">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Backup/Restore</h2>
                            </div>
                        </div>
                        <div className="card w-96 h-22 bg-white text-blue-400 border-blue-400 border-2 mt-8 p-0 static">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">DB Monitoring Dashboard</h2>
                            </div>
                        </div>
                        <div className="card w-96 h-22 bg-white text-blue-400 border-blue-400 border-2 mt-8 p-0 static">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Schedule Management</h2>
                            </div>
                        </div>
                        <div className="card w-96 h-22 bg-white text-blue-400 border-blue-400 border-2 mt-8 p-0 static">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Database Audit</h2>
                            </div>
                        </div>
                        <div className="card w-96 h-22 bg-white text-blue-400 border-blue-400 border-2 mt-8 p-0 static">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">SQL Monitoring</h2>
                            </div>
                        </div>
                        <div className="card w-96 h-22 bg-white text-blue-400 border-blue-400 border-2 mt-8 p-0 static">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Performance Management</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomeContents;