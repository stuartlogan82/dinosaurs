import { dietType } from "./diet";
import { dinosaurType } from "./dinosaur";
import { dinosaurGroupType } from "./dinosaurGroup";
import { habitatType } from "./habitat";
import { periodType } from "./period";
import { locationType } from "./location";
import { dinosaurOutlineType } from "./dinosaurOutline";

export const schema = {
  types: [
    dietType,
    dinosaurType,
    dinosaurGroupType,
    dinosaurOutlineType,
    habitatType,
    periodType,
    locationType
  ]
};