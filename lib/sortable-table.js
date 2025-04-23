export function sortOnField(arr, field, isAscending = true) {
  return [...arr].sort((a, b) => {
    return (isAscending ? 1 : -1) * String(a[field]).localeCompare(String(b[field]), undefined, { numeric: true });
  });
}

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
