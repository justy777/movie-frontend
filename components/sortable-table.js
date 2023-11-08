"use client";

import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";
import { capitalizeFirstLetter, sortOnField } from "../lib/sortable-table";

export default function SortableTable({ items }) {
  const [sortedField, setSortedField] = useState(null);
  const [isAscending, setIsAscending] = useState(true);

  function handleSort(field) {
    if (sortedField === field) {
      setIsAscending(!isAscending);
    } else {
      setIsAscending(true);
    }
    setSortedField(field);
  }

  let sortedItems =
    sortedField !== null ? sortOnField(items, sortedField, isAscending) : items;

  return (
    <table className="table-auto border-collapse">
      <thead>
        <tr className="border-b">
          {Object.keys(items[0]).map((field) => (
            <th
              key={field}
              className="text-sm font-semibold dark:text-white px-3 py-3.5"
            >
              <div className="group">
                <button
                  type="button"
                  className="flex"
                  onClick={() => handleSort(field)}
                >
                  {capitalizeFirstLetter(field)}
                  {sortedField === field ? (
                    <span className="ml-2 bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700 rounded">
                      {isAscending ? (
                        <ChevronUpIcon className="h-5 w-5" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5" />
                      )}
                    </span>
                  ) : (
                    <span className="ml-2 invisible group-hover:visible rounded">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-400 dark:text-gray-600" />
                    </span>
                  )}
                </button>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedItems.map((item) => (
          <tr
            className="border-t hover:bg-slate-200 dark:hover:bg-gray-700"
            key={item.id}
          >
            {Object.entries(item).map(([key, value]) => (
              <td key={key} className="text-sm dark:text-white px-3 py-4">
                {value}
              </td>
            ))}
            <td>
              <div className="inline-flex">
                <button
                  type="button"
                  className="bg-yellow-500 hover:bg-yellow-700 text-sm dark:text-white py-2 px-3 rounded-l"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-sm dark:text-white py-2 px-3 rounded-r"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
