import * as create from "./Create.ts";
import * as deleteById from "./DeleteById.ts";
import * as getAll from "./GetAll.ts";
import * as getById from "./GetById.ts";
import * as updateById from "./UpdateById.ts";

export const CidadesController = {
  ...create,
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById,
};
