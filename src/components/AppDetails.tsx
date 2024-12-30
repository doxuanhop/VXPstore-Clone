import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Badge } from "./ui/badge";
import { Download } from "lucide-react";

interface AppDetailsProps {
  title?: string;
  description?: string;
  company?: string;
  author?: string;
  size?: string;
  screenshots?: string[];
  downloadUrl?: string;
}

const AppDetails = ({
  title = "Sample Application",
  description = "This is a sample application description that showcases the features and capabilities of the app.",
  company = "Sample Company",
  author = "John Doe",
  size = "25MB",
  screenshots = [],
  downloadUrl = "#",
}: AppDetailsProps) => {
  const defaultScreenshot =
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113";
  const screenshotsToShow =
    screenshots.length > 0 ? screenshots : [defaultScreenshot];

  return (
    <div className="w-full min-h-screen bg-background p-4 md:p-8">
      <Card className="max-w-[1200px] mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Screenshots Carousel */}
          <div className="w-full">
            <Carousel className="w-full">
              <CarouselContent>
                {screenshotsToShow.map((screenshot, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video w-full overflow-hidden rounded-lg">
                      <img
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* App Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>{company}</span>
                <span>•</span>
                <span>{author}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Badge variant="secondary">{size}</Badge>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">{description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="w-full flex items-center justify-center gap-2"
                size="lg"
                onClick={() => window.open(downloadUrl, "_blank")}
              >
                <Download className="w-4 h-4" />
                Tải xuống
              </Button>
            </div>
          </div>
        </div>

        {/* Screenshots Grid */}
        {screenshotsToShow.length > 1 && (
          <div className="mt-8 border-t pt-8">
            <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {screenshotsToShow.map((screenshot, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-lg overflow-hidden border"
                >
                  <img
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default AppDetails;
