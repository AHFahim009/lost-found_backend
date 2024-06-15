
type TQuery = {
  page: number;
  take: number;
  sortOrder: string;
  sortBy: string
}


const paginationHelper = (query: TQuery) => {
  const { sortOrder, sortBy, page: pageNumber, take: takeNumber } = query

  // pagination
  const page = Number(pageNumber) || 1;
  const take = Number(takeNumber) || 5;
  const skip = (page - 1) * take


  // sorting
  const sortOrderIs = sortOrder || "desc";
  const sortByIs = sortBy || "createdAt"
  const orderBy = {
    [sortByIs]: sortOrderIs
  }

  return {
    page,
    take,
    skip,
    orderBy
  }
}

export default paginationHelper