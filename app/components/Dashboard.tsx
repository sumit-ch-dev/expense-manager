const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col items-start gap-4 p-4 border-r border-black-200">
      {/* Expense Information */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex-grow w-full text-left">
        <h2 className="text-xl font-bold mb-2">Expenses</h2>
        <p>Details about recent expenses.</p>
      </div>

      {/* Quick Access Links */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex-grow w-full text-left">
        <h2 className="text-xl font-bold mb-2">Quick Access</h2>
        <p>Links to important sections.</p>
      </div>

      {/* Charts */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex-grow w-full text-left">
        <h2 className="text-xl font-bold mb-2">Charts</h2>
        <p>Visual representation of expenses.</p>
      </div>

      {/* Recent Activities */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex-grow w-full text-left">
        <h2 className="text-xl font-bold mb-2">Recent Activities</h2>
        <p>Logs of recent activities.</p>
      </div>
    </div>
  );
};

export default Dashboard;
