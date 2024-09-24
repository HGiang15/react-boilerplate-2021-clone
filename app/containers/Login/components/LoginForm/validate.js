export const validate = values => {
  const errors = {};

  if (!values.custom_id) {
    errors.custom_id = 'Required!';
  }

  if (!values.password) {
    errors.password = 'Required!';
  }

  return errors;
};
