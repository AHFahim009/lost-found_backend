

const searchingHelper = (paramsData: any) => {
  const { searchTerm, ...filerParams } = paramsData;
  const searchingFields = ["foundItemName", "location", "description"];

  const conditionFields = [];
  // searching...............
  if (searchTerm) {
    conditionFields.push({
      OR: searchingFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  // filtering..............
  if (filerParams && Object.keys(filerParams).length > 0) {
    conditionFields.push({
      AND: Object.keys(filerParams).map((field) => ({
        [field]: paramsData[field],
      })),
    });
  }

  return conditionFields;
};

export default searchingHelper;
