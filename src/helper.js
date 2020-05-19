export function writtenPctl (pctl) {
  return Math.floor(pctl * 100);
}

export function suffix(pctl) {
  return "rd";
// "th"
// "rd"
// "nd"
// "st"
}

export function pctlOrScore(type) {
  if (type === "pctl") {
    return "PCTL";
  } else {
    return "Score";
  }
}