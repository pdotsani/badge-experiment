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
    return "";
  }
}

export function toScorePct(score, high, low) {
  return Math.abs(((score - low) / (high - low)).toFixed(2))
}

export function returnRightPct(pctl, score, high, low, type) {
  if (type === 'pctl') {
    return pctl;
  } else if (type = 'score') {
    return toScorePct(score, high, low);
  }
}