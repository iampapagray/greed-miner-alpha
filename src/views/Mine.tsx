import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { passiveMenuIcon, activeMenuIcon } from "@/assets/images";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info } from "lucide-react";
import ScoreBoard from "@/components/ScoreBoard";

function MinePage() {
  return (
    <div className="h-full flex flex-col items-center">
      <Tabs defaultValue="active" className="w-full h-full px-[10px] pt-[10px]">
        <TabsList className="grid w-full h-auto grid-cols-2 bg-tabBg">
          <TabsTrigger
            className="data-[state=active]:bg-darkTone data-[state=active]:text-white"
            value="active"
          >
            <span className="flex items-center gap-[6px]">
              <img src={activeMenuIcon} className="h-[30px] w-[30px]" />
              <p>Active Mine</p>
              <Info className="text-muted-foreground" />
            </span>
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-darkTone data-[state=active]:text-white"
            value="passive"
          >
            <span className="flex items-center gap-[6px]">
              <img src={passiveMenuIcon} className="h-[30px] w-[30px]" />
              <p>Passive Rig</p>
              <Info className="text-muted-foreground" />
            </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="active"
          className=" w-full flex justify-center items-center"
        >
          <div className="flex flex-col w-full justify-content items-center">
            <ScoreBoard />

            {/* <h1 className="text-white text-4xl">Let's Mine Up ⛏️</h1> */}
          </div>
        </TabsContent>
        <TabsContent
          value="passive"
          className="w-full flex justify-center items-center"
        >
          <div className="flex justify-content items-center pt-5">
            <h1 className="text-white text-4xl">oh download cash 🙄</h1>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MinePage;
