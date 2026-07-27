"use client"
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function AdminPage() {
  return (
    <div className="w-full">
       {/* @ts-ignore */}
      <NextStudio config={config} />
    </div>
  );
}

