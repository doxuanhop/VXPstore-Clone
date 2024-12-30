import React, { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Loader2, Smartphone } from "lucide-react";

interface ApkBuilderProps {
  appName: string;
  packageName?: string;
  icon?: string;
  onBuildComplete?: (downloadUrl: string) => void;
}

const ApkBuilder = ({
  appName,
  packageName = "com.example.app",
  icon = "",
  onBuildComplete,
}: ApkBuilderProps) => {
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildProgress, setBuildProgress] = useState(0);

  const handleBuild = async () => {
    setIsBuilding(true);
    setBuildProgress(0);

    // Simulate build progress
    const interval = setInterval(() => {
      setBuildProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);

    // Simulate build completion after 10 seconds
    setTimeout(() => {
      setIsBuilding(false);
      clearInterval(interval);
      setBuildProgress(100);
      if (onBuildComplete) {
        onBuildComplete("https://example.com/app.apk");
      }
    }, 10000);
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Smartphone className="w-5 h-5" />
        <h3 className="text-lg font-semibold">Xây dựng APK cho Android</h3>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Tên ứng dụng</Label>
          <Input value={appName} disabled />
        </div>

        <div className="space-y-2">
          <Label>Package Name</Label>
          <Input
            value={packageName}
            placeholder="com.example.app"
            disabled={isBuilding}
          />
        </div>
      </div>

      <div className="space-y-4">
        {isBuilding && (
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-300"
              style={{ width: `${buildProgress}%` }}
            />
          </div>
        )}

        <Button className="w-full" onClick={handleBuild} disabled={isBuilding}>
          {isBuilding ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Đang xây dựng APK ({buildProgress}%)
            </>
          ) : (
            "Xây dựng APK"
          )}
        </Button>
      </div>
    </Card>
  );
};

export default ApkBuilder;
