// 月～日が"必ず"入ると仮定 それ以外文字が入った場合のチェックは行わない

export const isHolidayIf = (day: string) => {
  if (day === "月") {
    return false;
  } else if (day === "火") {
    return false;
  } else if (day === "水") {
    return false;
  } else if (day === "木") {
    return false;
  } else if (day === "金") {
    return false;
  } else if (day === "土") {
    return true;
  } else if (day === "日") {
    return true;
  }
  return false;
};

export const isHolidaySwitch = (day: string) => {
  switch (day) {
    case "月":
      return false;
    case "火":
      return false;
    case "水":
      return false;
    case "木":
      return false;
    case "金":
      return false;
    case "土":
      return true;
    case "日":
      return true;
  }
  return false;
};

// 月～日が"必ず"入ると仮定するならこれでも良さそう
export const isHoliday = (day: string) => {
  const HOLIDAY = ["土", "日"];
  return day in HOLIDAY;
};
