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
import Heading from "@/components/Heading";
import Pit from "@/components/Pit";
import Spacer from "@/components/ui/Spacer";
import { useGamePlay } from "@/hooks/useGamePlay";

function MinePage() {

  const { score, buttonNumbers, round, tapped, tapBlock, isMaxTapped, getBlockValue } = useGamePlay();

  return (
    <div className="h-full flex flex-col items-center">
      <Tabs
        defaultValue="active"
        className="flex flex-col w-full h-full px-[10px] pt-[10px]"
      >
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
          className="w-full h-full flex justify-center items-center "
        >
          <div className="flex h-full flex-col w-full justify-content items-center">
            <Spacer className="h-[2.8125rem]" />
            <ScoreBoard />
            <Spacer className="h-[4.075rem]" />
            <Heading score={score} round={round} />
            <Spacer className="h-[1.75rem]" />
            <Pit 
              buttonNumbers={buttonNumbers} 
              tapped={tapped} 
              tapBlock={tapBlock} 
              isMaxTapped={isMaxTapped} 
              getBlockValue={getBlockValue}
            />
          </div>
        </TabsContent>
        <TabsContent
          value="passive"
          className="w-full h-full flex justify-center items-center "
        >
          <div className="flex h-fulls flex-col w-full justify-content items-center ">
            <h1 className="text-white text-4xl">oh download cash 🙄</h1>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MinePage;
