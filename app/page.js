import SortableTable from "../components/sortable-table";

const movies = [
  { id: 1, title: "American Psycho", year: 2000 },
  { id: 2, title: "The Thing", year: 1982 },
  { id: 3, title: "Jaws", year: 1975 },
  { id: 4, title: "Heat", year: 1995 },
  { id: 5, title: "Top Gun", year: 1986 },
  { id: 6, title: "Pulp Fiction", year: 1994 },
  { id: 7, title: "The Lost Boys", year: 1987 },
  { id: 8, title: "Ed Wood", year: 1994 },
  { id: 9, title: "The Game", year: 1997 },
  { id: 10, title: "Some Like It Hot", year: 1959 },
];

export default function Page() {
  return (
    <>
      <div className="flex">
        <h1 className="font-semibold dark:text-white">Movies</h1>
        <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-sm font-semibold dark:text-white py-2 px-3 ml-64 rounded"
        >
          Add movie
        </button>
      </div>
      <SortableTable items={movies} />
    </>
  );
}
