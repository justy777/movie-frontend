"use client";

import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";
import { capitalizeFirstLetter, sortOnField } from "../lib/sortable-table";

export default function SortableTable({ data }) {
  const [items, setItems] = useState([...data]);
  const [sortedField, setSortedField] = useState(null);
  const [isAscending, setIsAscending] = useState(true);

  function handleSort(field) {
    const newIsAscending = (sortedField === field) ? !isAscending : true;

    setSortedField(field);
    setIsAscending(newIsAscending);

    let sortedItems = sortOnField(items, field, newIsAscending);
    setItems(sortedItems);
  }

  function handleDelete(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  return (
    <table className="table-auto border-collapse">
      <thead>
        <tr className="border-b border-gray-200">
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
                    <span className="ml-2 bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700 rounded-sm">
                      {isAscending ? (
                        <ChevronUpIcon className="h-5 w-5" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5" />
                      )}
                    </span>
                  ) : (
                    <span className="ml-2 invisible group-hover:visible rounded-sm">
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
        {items.map((item) => (
          <tr
            className="border-t border-gray-200 hover:bg-slate-200 dark:hover:bg-gray-700"
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
                  className="bg-yellow-500 hover:bg-yellow-700 text-sm dark:text-white py-2 px-3 rounded-l-sm"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 hover:bg-red-700 text-sm dark:text-white py-2 px-3 rounded-r-sm"
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
