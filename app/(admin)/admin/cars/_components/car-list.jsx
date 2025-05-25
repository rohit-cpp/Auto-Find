"use client";

import React, { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Cars | AutoFind Admin",
  description: "Manage cars in your marketPlace",
};

const CarsList = () => {
  const [search, setSearch] = useState("");
  const router = useRouter;
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="space-y-4">
      <div
        className="flex flex-col sm:flex-row gap-4 items-start sm:items-center
        justify-between"
      >
        <Button
          onClick={() => router.push("/admin/cars/create")}
          className="flex items-center"
        >
          <Plus className="h-4 w-4" /> Add Car
        </Button>
        <form onSubmit={handleSearchSubmit} className="flex w-full sm:w-auto">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              className="pl-9 w-full sm:w-60"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="search"
              placeholder="Search cars..."
            />
          </div>
        </form>
      </div>
      {/* Cars Table */}
    </div>
  );
};

export default CarsList;
