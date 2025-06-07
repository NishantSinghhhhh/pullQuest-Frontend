interface Props {
  role: string;
}

const Dashboard = ({ role }: Props) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to {role} Dashboard</h1>
    </div>
  );
};

export default Dashboard;
