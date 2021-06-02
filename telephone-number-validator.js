function telephoneCheck(str) {
  let regexPatters = [
    //555-555-5555 or 555 555 5555
    /^\d{3}-? ?\d{3}-? ?\d{4}$/,
    //1 555-555-5555 or 1 555 555 5555
    /^1 \d{3}-? ?\d{3}-? ?\d{4}$/,
    //(555)555-5555 or (555) 555-5555
    /^1? ?\(\d{3}\) ?\d{3}-\d{4}$/,
    //5555555555
    /^\d{10}$/,
  ];

  return regexPatters.some((pattern) => pattern.test(str));
}

telephoneCheck("555-555-5555");
