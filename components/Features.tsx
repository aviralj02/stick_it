import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Download, PaintbrushVertical, Usb } from "lucide-react";

type Props = {};

const featureList = [
  {
    title: "Instant Customization",
    description:
      "Quickly transform your to-do list into a personalized wallpaper, keeping your priorities front and center.",
    icon: (
      <PaintbrushVertical
        height={35}
        width={35}
        strokeWidth={1.5}
        className="text-white bg-neutral-900 p-1 rounded-md"
      />
    ),
  },
  {
    title: "Easy Download",
    description:
      "Save your customized wallpaper in your favorite formats, including PNG, for easy use across all your devices.",
    icon: (
      <Download
        height={35}
        width={35}
        strokeWidth={1.5}
        className="text-white bg-neutral-900 p-1 rounded-md"
      />
    ),
  },
  {
    title: "Boosted Productivity",
    description:
      "Stay motivated and organized by turning your task list into a constant visual reminder.",
    icon: (
      <Usb
        height={35}
        width={35}
        strokeWidth={1.5}
        className="text-white bg-neutral-900 p-1 rounded-md"
      />
    ),
  },
];

const Features = (props: Props) => {
  return (
    <div className="flex flex-col items-center my-44 space-y-10">
      <Badge variant="secondary">Features</Badge>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full">
        {featureList.map((feature, index) => (
          <Card key={index} className="space-y-14 shadow-none">
            <CardHeader className="gap-2">{feature.icon}</CardHeader>
            <CardContent className="space-y-3">
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
