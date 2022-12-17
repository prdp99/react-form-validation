const validate = (user, sectors) => {
  const errors = {};
  const maxLenght = 30;
  const minLength = 3;

  if (user.name.length === 0) errors["name"] = `* Name should not be empty`;
  if (user.name.length < minLength)
    errors["name"] = `* Name should  be greater than ${minLength}`;
  if (user.name.length > maxLenght)
    errors["name"] = `* Name should be less than ${maxLenght}`;
  if (user.terms === false) errors["terms"] = `* You must agree to terms `;

  if (sectors.length === 0)
    errors["sectors"] = "* At leat one sectors should be Selected";

  return errors;
};
export default validate;
