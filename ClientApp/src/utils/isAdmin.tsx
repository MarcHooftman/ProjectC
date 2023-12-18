function isAdmin() {
  return (
    localStorage.getItem("admin") && localStorage.getItem("admin") != "invalid"
  );
}

export { isAdmin };
