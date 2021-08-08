export {};

const textFile = await Deno.readTextFile("./config.json");
const configFile = JSON.parse(textFile);
