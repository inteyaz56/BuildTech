import StatCard from "./StatCard";
import DashboardCard from "./DashboardCard";
import SectionHeader from "./SectionHeader";

function SimpleDashboard({ eyebrow, title, description, stats, children }) {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {children}
    </div>
  );
}

export default SimpleDashboard;
