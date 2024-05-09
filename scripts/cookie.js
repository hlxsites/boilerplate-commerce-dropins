function getCookie(key) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${key}=`)) {
      return cookie.substring(key.length + 1);
    }
  }
  return null;
}

export default getCookie;
