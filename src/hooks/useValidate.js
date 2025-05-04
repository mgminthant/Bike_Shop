const useValdate = (password) => {
  let score = 0;

  if (!password) return score;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (password.length >= 8) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;
  return score;
};

export default useValdate;
