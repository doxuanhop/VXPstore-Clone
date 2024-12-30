import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

interface AppCardProps {
  id?: string;
  title?: string;
  thumbnail?: string;
  description?: string;
  size?: string;
  downloadUrl?: string;
  company?: string;
  author?: string;
}

const AppCard = ({
  id = "1",
  title = "Sample App",
  thumbnail = "https://api.dicebear.com/7.x/avataaars/svg?seed=app",
  description = "A sample application description that showcases the app features and functionality.",
  size = "15MB",
  downloadUrl = "#",
  company = "Sample Company",
}: AppCardProps) => {
  return (
    <Link to={`/app/${id}`} className="block w-full">
      <Card className="w-full bg-white hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader className="p-4">
          <div className="w-full h-40 relative rounded-lg overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1 truncate">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">
            {description}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{company}</span>
            <span>{size}</span>
          </div>
          <Button
            className="w-full mt-4"
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              window.open(downloadUrl, "_blank");
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Tải xuống
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AppCard;
