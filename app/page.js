import SortableTable from "../components/sortable-table";

import { movies } from "../lib/movie-data";

export default function Page() {
  return (
    <>
      <div className="flex">
        <h1 className="font-semibold dark:text-white">Movies</h1>
        <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-sm font-semibold dark:text-white py-2 px-3 ml-64 rounded-sm"
        >
          Add movie
        </button>
      </div>
      <SortableTable data={movies} />
    </>
  );
}
