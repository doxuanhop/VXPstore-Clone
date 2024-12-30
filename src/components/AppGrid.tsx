import React from "react";
import AppCard from "./AppCard";

interface AppGridProps {
  apps?: Array<{
    id: string;
    title: string;
    thumbnail: string;
    description: string;
    size: string;
    downloadUrl: string;
    company: string;
  }>;
}

const AppGrid = ({
  apps = [
    {
      id: "1",
      title: "Sample App 1",
      thumbnail: "https://api.dicebear.com/7.x/avataaars/svg?seed=app1",
      description: "A sample application that showcases various features.",
      size: "15MB",
      downloadUrl: "#",
      company: "Sample Company A",
    },
    {
      id: "2",
      title: "Sample App 2",
      thumbnail: "https://api.dicebear.com/7.x/avataaars/svg?seed=app2",
      description: "Another sample application with different features.",
      size: "20MB",
      downloadUrl: "#",
      company: "Sample Company B",
    },
    {
      id: "3",
      title: "Sample App 3",
      thumbnail: "https://api.dicebear.com/7.x/avataaars/svg?seed=app3",
      description: "A third sample application for demonstration.",
      size: "10MB",
      downloadUrl: "#",
      company: "Sample Company C",
    },
  ],
}: AppGridProps) => {
  return (
    <div className="w-full bg-background">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-start">
        {apps.map((app) => (
          <AppCard
            key={app.id}
            id={app.id}
            title={app.title}
            thumbnail={app.thumbnail}
            description={app.description}
            size={app.size}
            downloadUrl={app.downloadUrl}
            company={app.company}
          />
        ))}
      </div>
    </div>
  );
};

export default AppGrid;
