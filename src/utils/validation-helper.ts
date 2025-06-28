export const isValidURL = (url: string) => {
  const regex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
  return regex.test(url)
}

export const isValidPhoneNumber = (phoneNumber: string) => {
  const regex = /^\+\d{8,}$/
  return regex.test(phoneNumber)
}