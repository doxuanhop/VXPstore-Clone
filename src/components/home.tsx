import React, { useEffect, useState } from "react";
import AppGrid from "./AppGrid";
import { fetchApps, AppData, groupAppsByCategory } from "@/lib/api";

interface HomeProps {
  searchQuery?: string;
}

const Home = ({ searchQuery = "" }: HomeProps) => {
  const [apps, setApps] = useState<AppData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadApps = async () => {
      try {
        const data = await fetchApps();
        if (mounted) {
          setApps(data);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError("Failed to load apps");
          setLoading(false);
        }
      }
    };

    loadApps();

    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return (
      <div className="w-full flex items-center justify-center py-12">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  const categorizedApps = groupAppsByCategory(apps);

  return (
    <div className="w-full">
      <div className="max-w-[1512px] mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p>Đang tải...</p>
          </div>
        ) : (
          Object.entries(categorizedApps).map(([category, categoryApps]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{category}</h2>
              <AppGrid
                apps={categoryApps.map((app) => ({
                  id: app.id,
                  title: app.title,
                  thumbnail: app.photo,
                  description: app.des,
                  size: app.size,
                  downloadUrl: app.dl,
                  company: app.company,
                  author: app.author,
                  screenshots: app.screen
                    ? decodeURIComponent(app.screen)
                        .split(";")
                        .map((url) => url.trim())
                        .filter(
                          (url) => url && url !== "undefined" && url !== "null",
                        )
                    : [],
                }))}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
