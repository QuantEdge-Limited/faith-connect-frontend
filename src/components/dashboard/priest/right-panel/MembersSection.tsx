import React, { useState } from "react";
import { DataTable } from "../table/DataTable";
import { Columns } from "../table/Columns";
import { ColumnFiltersState } from "@tanstack/react-table";
import Filters from "../table/Filters";

export default function MembersSection() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  // Sample data
  // Outstations list
  const outStations = [
    "St Charles",
    "St Francis",
    "St Andrew",
    "St Monica",
    "St Gabriel",
  ];

  // Mock members data (with email + outstation)
  const members = [
    {
      id: 1,
      name: "Michael Anderson",
      role: "Youth Leader",
      baptized: "2010-05-12",
      contact: "555-0101",
      email: "michael.anderson@yahoo.com",
      outStation: outStations[0],
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Catechist Coordinator",
      baptized: "2015-08-20",
      contact: "555-0102",
      email: "sarah.williams@example.com",
      outStation: outStations[1],
    },
    {
      id: 3,
      name: "James Brown",
      role: "Parish Administrator",
      baptized: "2018-03-15",
      contact: "555-0103",
      email: "james.brown@gmail.com",
      outStation: outStations[2],
    },
    {
      id: 4,
      name: "Emma Davis",
      role: "Choir Director",
      baptized: "2020-11-08",
      contact: "555-0104",
      email: "emma.davis@hotmail.com",
      outStation: outStations[3],
    },
  ];

  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-slate-800">
            Parish Leaders
          </h2>
        </div>
        {/* Search and Filters */}
        <Filters
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <div className="overflow-hidden">
          <DataTable
            columns={Columns}
            data={members}
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </div>
      </div>
    </>
  );
}
