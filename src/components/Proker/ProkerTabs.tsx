import { useEffect, useState } from "react";
import NavTabs from "../NavTabs";
import { Tabs, TabsContent, TabsTrigger } from "../ui/tabs";
import ProkerCards from "./ProkerCards";
import axios from "axios";
import { getBreadCrumb } from "@/lib/networks/breadCrumbQueries";
import useLoadWindow from "@/hooks/useLoadWindow";

export default function ProkerTabs() {
  const [data, setData] = useState([]);
  const dinas = [
    "inti",
    "kominfo",
    "akademik",
    "psdm",
    "pmb",
    "kwu",
    "kastrad",
    "adm",
  ];

  useEffect(() => {
    axios.get(`/data/proker.json`).then((res) => {
      setData(res.data.data);
    });
  }, []);

  useLoadWindow();

  return (
    <Tabs
      defaultValue={getBreadCrumb() ?? "all"}
      className="overflow-hidden text-center"
    >
      <h1 className="mb-8 pt-0 text-center text-2xl font-bold text-primary md:pt-8 lg:pt-0 xl:text-4xl">
        Our Kabinet
      </h1>
      <NavTabs>
        <div className="flex">
          <TabsTrigger value="all">all</TabsTrigger>
          <TabsTrigger value="inti">inti</TabsTrigger>
          <TabsTrigger value="kominfo">kominfo</TabsTrigger>
          <TabsTrigger value="akademik">akademik</TabsTrigger>
        </div>
        <div className="flex">
          <TabsTrigger value="psdm">psdm</TabsTrigger>
          <TabsTrigger value="pmb">pmb</TabsTrigger>
          <TabsTrigger value="kwu">kwu</TabsTrigger>
          <TabsTrigger value="kastrad">kastrad</TabsTrigger>
          <TabsTrigger value="adm">adm</TabsTrigger>
        </div>
      </NavTabs>

      <TabsContent value={"all"}>
        <ProkerCards key={9} dinas={"all"} item={data} nav={"all"} />
      </TabsContent>

      {dinas.map((item, key) => (
        <TabsContent key={key} value={item}>
          <ProkerCards key={key} dinas={item} item={data[key]} nav={item} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
