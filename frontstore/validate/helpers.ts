export const getValidateError = (errors: any) => {
  console.log('errors', errors);

  if (!errors) {
    return errors?.reduce(
      (accumulator: any, error: any) => ({
        ...accumulator,
        [error.path]: error.message,
      }),
      {}
    );
  }

  return {};
};
