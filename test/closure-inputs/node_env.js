if (process.env.NODE_ENV == 'production') {
  "EQ:prod"
} else {
  "EQ:dev"
}

if (process.env.NODE_ENV) {
  "check";
}

if (something == "foo") "something";

if (process.env.NODE_ENV == 'development') {
  "EQ:dev"
} else {
  "EQ:prod"
}

if (process.env.NODE_ENV == "production") {
   "EQ;prod;no-else"
}

if (process.env.NODE_ENV === "production") {
   "SHEQ;prod;no-else"
}

if (process.env.NODE_ENV == "development") {
  "removed";
}

if (process.env.NODE_ENV != "development") {
   "NE;prod";
}

if (process.env.NODE_ENV !== "development") {
   "SHNE;prod";
}



var test2 = (process.env.NODE_ENV !== "production") ? "dev" : "prod";

process.env.NODE_ENV !== "production" ? warning(false, "`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead.") : void 0;

if (/[?&]react_perf\b/.test(url)) {
  ReactDebugTool.beginProfiling();
}

var x = Buffer();

console.log(__dirname);
console.log(__filename);