export const isEmailAddress = (address) => {
  const symbol = "!#$%&'\\*\\+\\-\\/=?\\^_`{|}~";
  const mailAddressMatcher = new RegExp(
    '^[\\w' +
      symbol +
      ']+(\\.{1}[\\w' +
      symbol +
      ']+)*@[\\w' +
      symbol +
      ']+(\\.{1}[\\w' +
      symbol +
      ']+)*$'
  );
  // '^\\w' + symbol + '*@(\\w)+\\.com$'
  const localPartMatcher = new RegExp(
    '^[\\w' + symbol + ']+(\\.[\\w' + symbol + ']+)*@'
  );
  const localPart = localPartMatcher.exec(address);
  if (mailAddressMatcher.test(address)) {
    const localPartLength = localPart[0].length - 1;
    const domainPartLength = address.length - localPartLength - 1;
    if (localPartLength <= 64 && domainPartLength <= 252) {
      return true;
    }
  }
  return false;
};
