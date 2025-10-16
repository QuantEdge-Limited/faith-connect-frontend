"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";

// Define the type for each row in your table
export interface Parishioner {
  id: string;
  name: string;
  email: string;
  role: string;
  baptized: string;
  outStation: string;
  // status?: string; // Uncomment if you later use StatusBadge
}

// Columns definition
export const Columns: ColumnDef<Parishioner>[] = [
  {
    accessorKey: "name",
    header: "Parishioner Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "baptized",
    header: "Baptized On",
  },
  // {
  //   accessorKey: "status",
  //   header: "Status",
  //   cell: ({ row }) => {
  //     const status = row.getValue("status") as string;
  //     return <StatusBadge status={status} />;
  //   },
  // },
  {
    accessorKey: "outStation",
    header: "OutStation",
  },
  {
    id: "actions", // ✅ use id instead of accessorKey for computed/interactive columns
    header: () => (
      <div className="flex items-center justify-end space-x-2">Actions</div>
    ),
    cell: ({ row }) => {
      const parishioner = row.original; // typed as Parishioner
      return (
        <div className="flex items-center justify-end space-x-2">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-900 p-1"
            onClick={() => console.log("Viewing:", parishioner.name)}
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      );
    },
  },
];
