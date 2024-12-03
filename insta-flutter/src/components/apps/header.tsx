import { Button, Typography } from "@material-tailwind/react";
import {PaddleButton} from "../paddle-buy-button";

export function AppHeader({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="p-4 md:p-8">
      <div className="container mx-auto mt-12 md:mt-24 mb-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 md:pt-20">
          {/* Left side: text content */}
          <div className="md:w-1/2">
            <Typography
              variant="h1"
              className="relative mt-4 mb-2 text-3xl md:text-4xl font-black !leading-normal tracking-normal"
            >
              {title}
            </Typography>
            <Typography className="relative max-w-lg !text-base md:!text-lg !font-normal leading-snug !text-blue-gray-500">
              {description}
            </Typography>
            <div className="mt-6 flex flex-col md:flex-row">
              <a href="#web-3" className="mb-2 md:mb-0 md:mr-2">
                <Button variant="solid" size="sm" className="w-full md:w-auto">
                  Social Network
                </Button>
              </a>
              <a href="#application-admin-ui" className="mb-2 md:mb-0 md:mr-2">
                <Button variant="solid" size="sm" className="w-full md:w-auto">
                  Booking
                </Button>
              </a>
              <a href="#marketing-presentation">
                <Button variant="solid" size="sm" className="w-full md:w-auto">
                  Taxi Apps
                </Button>
              </a>
            </div>
            {/* Paddle Buy Button */}
            <div className="mt-6">
              <PaddleButton />
            </div>
          </div>

          {/* Right side: phone image with video */}
          <div className="max-h-[400px]">
            <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center relative">
              <div className="relative w-full flex justify-center items-center">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain"
                />
                <video
                  src="https://firebasestorage.googleapis.com/v0/b/dopebase-9b89b.appspot.com/o/releases%2Freact-native-dating-app.mp4?alt=media&token=701aec9b-a7ad-4f8b-97e4-735db9fd38f6"
                  autoPlay
                  loop
                  muted
                  className="absolute top-[10%] left-[10%] w-[80%] h-[80%] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
