import * as create from "./Create.js";
import * as deleteById from "./DeleteById.js";
import * as getAll from "./GetAll.js";
import * as getById from "./GetById.js";
import * as updateById from "./UpdateById.js";

export const CidadesController = {
  ...create,
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById,
};
