type cssVariable = {
  name: string;
  value: string;
};

export const cssVariables: cssVariable[] = [
  { name: "red", value: "hsl(10, 79%, 65%)" },
  { name: "cyan", value: "hsl(186, 34%, 60%)" },
  { name: "dark-brown", value: "hsl(25, 47%, 15%)" },
  { name: "brown", value: "hsl(28, 10%, 53%)" },
  { name: "cream", value: "hsl(27, 66%, 92%)" },
  { name: "orange", value: "#f7e9dc" },
  { name: "border-radius", value: "8px" },
];
export const getVariable = (name: string): any => {
  return cssVariables.filter((e) => {
    return e.name == name;
  })[0].value;
};
// export default cssVariables;
// export cssVariables;
