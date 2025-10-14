import { ChevronDown, Search } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Filters({ columnFilters, setColumnFilters }) {
  const nameFilter =
    columnFilters?.find((filter) => filter.id === "name")?.value || "";
  const onFilterChange = (id, value) =>
    setColumnFilters((prev) =>
      prev.filter((filter) => filter.id !== id).concat({ id, value })
    );
  return (
    <div className="bg-white w-1/2 rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search Member..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={nameFilter}
            onChange={(e) => onFilterChange("name", e.target.value)}
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            OutStation <ChevronDown className="w-4 h-4 ml-5 -mr-3 " />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border border-[#0D090A]/15 bg-white/90 backdrop-blur-lg">
            <DropdownMenuItem>Active</DropdownMenuItem>
            <DropdownMenuItem>Pending</DropdownMenuItem>
            <DropdownMenuItem>Inactive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
