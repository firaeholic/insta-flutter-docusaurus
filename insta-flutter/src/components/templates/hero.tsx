import { Button, Typography } from "@material-tailwind/react";

export function HeroSection() {
  return (
    <div className="p-8">
      <div className="container mx-auto mt-24 md:mt-1 mb-10 w-full">
        <div className="pt-20">
          <Typography
            variant="h1"
            className="relative mt-10 mb-2 text-4xl font-black !leading-normal tracking-normal md:text-[32px] "
          >
            Explore our Premium Flutter Templates
          </Typography>
          <Typography className="relative max-w-lg !text-lg !font-normal leading-snug !text-blue-gray-500">
            Our Flutter templates help you to create beautiful apps faster and more efficiently. Our templates are fully customizable and compatible with all modern devices.
          </Typography>
          <div className="mt-10">
            <a  href="#web-3">
              <Button variant="solid" size="sm" className="mr-2">
                Social Network
              </Button>
            </a>
            <a  href="#application-admin-ui">
              <Button variant="solid" size="sm" className="mr-2">
                Booking
              </Button>
            </a>
            <a  href="#marketing-presentation">
              <Button variant="solid" size="sm" className="mr-2">
                Taxi Apps
              </Button>
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HeroSection;