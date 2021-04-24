enum RememberMe {
  On = "on",
  Off = "off",
}

export function isRememberMeSet(): boolean {
  return window.localStorage.getItem("remember_me") === RememberMe.On;
}

export function setRememberMe(bool: boolean) {
  let state = bool ? RememberMe.On : RememberMe.Off;

  window.localStorage.setItem("remember_me", state);
}
