/** @format */

import React from "react";
import JavaScriptSVG from "./svgs/JavaScriptSVG.svg";
import ReactSVG from "./svgs/ReactSVG.svg";
import AngularSVG from "./svgs/AngularSVG.svg";
import VueSVG from "./svgs/VueSVG.svg";
import WebpackSVG from "./svgs/WebpackSVG.svg";
import SassSVG from "./svgs/SassSVG.svg";
import NodeSVG from "./svgs/NodeSVG.svg";
import PhpSVG from "./svgs/PhpSVG.svg";
import ShopifySVG from "./svgs/ShopifySVG.svg";
import HtmlSVG from "./svgs/HtmlSVG.svg";
import TypeScriptSVG from "./svgs/TypeScriptSVG.svg";
import HerokuSVG from "./svgs/HerokuSVG.svg";
import TailwindSVG from "./svgs/TailwindSVG.svg";
import GraphQLSVG from "./svgs/GraphQLSVG.svg";
import MongoDBSVG from "./svgs/MongoDBSVG.svg";
import GitLabSVG from "./svgs/GitLabSVG.svg";
import GitHubSVG from "./svgs/GitHubSVG.svg";
import BitBucketSVG from "./svgs/BitBucketSVG.svg";
import PythonSVG from "./svgs/PythonSVG.svg";

const Tools = () => {
  return (
    <div className="text-white flex flex-col md:flex-row text-center w-full sm:w-[60%] bg-white rounded-[16px] my-[10px]">
      <div className="md:-rotate-90 border-b-2 border-black py-[20px] px-[10px]">
        <p className="text-black font-bold">Tools</p>
      </div>
      <div className="flex flex-wrap px-[15px] py-[3px]">
        <JavaScriptSVG />
        <ReactSVG />
        <AngularSVG />
        <VueSVG />
        <WebpackSVG />
        <SassSVG />
        <NodeSVG />
        <PhpSVG />
        <ShopifySVG />
        <HtmlSVG />
        <TypeScriptSVG />
        <HerokuSVG />
        <TailwindSVG />
        <GraphQLSVG />
        <MongoDBSVG />
        <GitLabSVG />
        <GitHubSVG />
        <BitBucketSVG />
        <PythonSVG />
      </div>
    </div>
  );
};

export default Tools;
