const useFilter = (totalBikes, searchTerm, select, cls) => {
  let sortedBikes = [...totalBikes];
  switch (select) {
    case "des":
      sortedBikes = sortedBikes.sort(
        (a, b) =>
          Math.ceil(b.price - b.price * (b.discount / 100)) -
          Math.ceil(a.price - a.price * (a.discount / 100))
      );
      break;
    case "asc":
      sortedBikes = sortedBikes.sort(
        (a, b) =>
          Math.ceil(a.price - a.price * (a.discount / 100)) -
          Math.ceil(b.price - b.price * (b.discount / 100))
      );
      break;
    default:
      sortedBikes = sortedBikes.sort((a, b) => b.discount - a.discount);
  }

  sortedBikes = sortedBikes.filter((item) => {
    if (
      item.desc.pd_name
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(searchTerm.toLowerCase().replace(/\s+/g, "")) &&
      (cls === "all" || item.categ.toLowerCase().replace(/\s+/g, "") === cls)
    ) {
      return true;
    } else {
      return false;
    }
  });

  return sortedBikes;
};

export default useFilter;
