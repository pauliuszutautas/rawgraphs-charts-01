export const mapData = function (data, mapping, dataTypes, dimensions) {
  return data.map((d) => ({
    x: d[mapping.x.value],
    y: d[mapping.y.value],
    color: d[mapping.color.value],
  }))
};