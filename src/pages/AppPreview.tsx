import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppDetails from "../components/AppDetails";
import { fetchApps, AppData } from "@/lib/api";

interface AppPreviewProps {
  id?: string;
}

const AppPreview = ({ id: propId }: AppPreviewProps) => {
  const { id: urlId } = useParams();
  const id = propId || urlId;
  const [app, setApp] = useState<AppData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApp = async () => {
      const apps = await fetchApps();
      const foundApp = apps.find((a) => a.id === id);
      setApp(foundApp || null);
      setLoading(false);
    };
    loadApp();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-background flex items-center justify-center">
        <p>Loading app details...</p>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="min-h-screen w-full bg-background flex items-center justify-center">
        <p>App not found</p>
      </div>
    );
  }

  const screenshots = app.screen
    ? decodeURIComponent(app.screen)
        .split(";")
        .map((url) => url.trim())
        .filter((url) => url && url !== "undefined" && url !== "null")
    : [];

  return (
    <div className="min-h-screen w-full bg-background">
      <AppDetails
        title={app.title}
        description={app.des}
        company={app.company}
        author={app.author}
        size={app.size}
        screenshots={screenshots}
        downloadUrl={app.dl}
      />
    </div>
  );
};

export default AppPreview;
