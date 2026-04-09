import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { JSX } from "react";

interface Props {
  children: React.ReactNode;
  icon: JSX.Element;
  title: string;
}

export const HeroStatCard = ({ children, icon, title }: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
};
