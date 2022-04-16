import * as fs from "expo-file-system";
import { StorageAccessFramework } from "expo-file-system";

export const getAccess = async () => {
  let request = await StorageAccessFramework.requestDirectoryPermissionsAsync(
    "/"
  );
  let fileName = "config.json";
  let config = {
    granted: request.granted,
    musicDirectory: request.directoryUri,
  };
  await writeOnConfig(config);

  let readDir = await fs.readDirectoryAsync(fs.documentDirectory);
  console.log(readDir);

  let readFile = await fs.readAsStringAsync(fs.documentDirectory + fileName);
  console.log(readFile);
};

const writeOnConfig = async (content) => {
  // get previous content
  let fileContent = await fs.readAsStringAsync(
    fs.documentDirectory + "config.json"
  );
  let jsonContent = JSON.parse(fileContent);
  // add new content
  jsonContent = { ...jsonContent, ...content };

  let fileName = "config.json";
  await fs.writeAsStringAsync(
    fs.documentDirectory + fileName,
    JSON.stringify(jsonContent)
  );
};

export const accessAlreadyGranted = async () => {
  let fileName = "config.json";
  //check if file exists
  let filesList = await fs.readDirectoryAsync(fs.documentDirectory);
  if (!filesList.includes(fileName)) return false;

  let fileContent = await fs.readAsStringAsync(fs.documentDirectory + fileName);
  let jsonContent = JSON.parse(fileContent);
  return jsonContent.granted;
};
