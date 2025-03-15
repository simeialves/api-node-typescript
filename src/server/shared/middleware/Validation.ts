import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema, ValidationError } from "yup";

type TProperty = "body" | "header" | "params" | "query";

type TGetSchema = <T extends object>(
  schema: ObjectSchema<T>
) => ObjectSchema<any>;

type TAllSchemas = Record<TProperty, ObjectSchema<any>>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: TValidation =
  (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas((schema) => schema);

    const errorsResult: Record<string, Record<string, string>> = {};

    Object.entries(schemas).forEach(([key, schema]) => {
      try {
        schema.validateSync(req[key as TProperty], {
          abortEarly: false,
        });
      } catch (err) {
        const yupError = err as ValidationError;
        const errors: Record<string, string> = {};

        yupError.inner.forEach((error) => {
          if (!error.path) return;

          errors[error.path] = error.message;
        });

        errorsResult[key] = errors;
      }
    });

    if (Object.entries(errorsResult).length) {
      return res.status(StatusCodes.BAD_REQUEST).json(errorsResult);
    }

    return next();
  };
