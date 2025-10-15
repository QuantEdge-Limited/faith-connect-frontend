"use client";

// import StatusBadge from "@/components/StatusBadge";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const Columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Parishioner Name",
    size: 50,
  },
  {
    accessorKey: "email",
    header: "Email",
    size: 200,
  },
  {
    accessorKey: "gender",
    header: "Gender",
    size: 10,
  },
  {
    accessorKey: "baptized",
    header: "Baptized On",
    size: 100,
  },
  //   {
  //     accessorKey: "status",
  //     header: "Status",
  //     cell: ({ row }) => {
  //       const status = row.getValue("status");
  //       return <StatusBadge status={status} />;
  //     },
  //   },
  {
    accessorKey: "outStation",
    header: "OutStation",
    size: 150,
  },
  {
    accessorKey: "actions",
    header: () => (
      <div className="flex items-center justify-end space-x-2">Actions</div>
    ),
    cell: () => (
      <div className="flex items-center justify-end space-x-2">
        <button className="text-blue-600 hover:text-blue-900 p-1">
          <Eye className="w-4 h-4" />
        </button>
      </div>
    ),
  },
];
