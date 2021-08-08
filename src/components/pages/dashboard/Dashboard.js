import React, { useState } from "react";
import Sidebar from "../../layout/Sidebar";
const Dashboard = () => {
  const dashboardList = [
    { name: "Home", notificationCount: 0 },
    { name: "Profile", notificationCount: 2 },
    { name: "Listed Spaces", notificationCount: 0 },
    { name: "Interested Customers", notificationCount: 0 },
    { name: "Calendar", notificationCount: 0 },
    { name: "Payments", notificationCount: 0 },
  ];
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <>
      <div className="flex flex-no-wrap">
        <Sidebar />
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
          <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
            {/* Place your content here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
