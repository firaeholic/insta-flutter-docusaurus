import { Button, Card, Typography, Chip } from "@material-tailwind/react";

export function ProductCard({
  title,
  description,
  image,
  price,
}: {
  title: string;
  description: string;
  image: string;
  price: number;
}) {
  return (
    <Card className="max-w-xs shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-4">
        {/* Chip with adjusted color for dark mode */}
        <Chip variant="ghost" className="mb-2 text-primary dark:text-white">
          <Chip.Label>Flutter</Chip.Label>
        </Chip>

        {/* Title with dynamic text color */}
        <Typography
          variant="h5"
          className="font-bold text-lg mb-2 text-gray-900 dark:text-white"
        >
          {title.replace(/Flutter/g, " ")}
        </Typography>

        {/* Description with dynamic text color */}
        <Typography className="mb-2 text-gray-600 dark:text-gray-300">
          {description.slice(0, 70)}...
        </Typography>

        {/* Price with primary color support */}
        <Typography className="text-xl font-semibold text-primary dark:text-primary-light">
          ${price}
        </Typography>
      </div>

      <div className="pb-4 flex justify-center">
        <Button color="primary" variant="outline" className="dark:text-white dark:border-white">
          Buy Now
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;
