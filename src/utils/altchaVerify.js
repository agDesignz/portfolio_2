const altchaVerify = async (token) => {
  const altchaVerified = await fetch(import.meta.env.VITE_ALTCHA_API_VERIFY, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      site: "portfolio",
      token: token,
      extra: {},
    }),
  });
  return altchaVerified;
};

export default altchaVerify;
