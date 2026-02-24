const FORM: HTMLFormElement | null = document.querySelector("#check");
const REQUIRED_FIELDS: Array<HTMLInputElement> = Array.from(
  document.querySelectorAll("#check *:required"),
);
enum TYPES_INPUT {
  TEXT = "text",
  TEL = "tel",
  EMAIL = "email",
  CHECKBOX = "checkbox",
}

function minLengthValid(len: number, m: number, span: HTMLElement): boolean {
  const f = len > m;
  if (!f) {
    console.log(span);
    span.textContent = `Длина должна быть больше ${m} символов`;
  }
  return f;
}

function checkValid(check: boolean, span: HTMLElement): boolean {
  const f = check;
  if (!f) {
    console.log(span);
    span.textContent = `Обязательное поле`;
  }
  return f;
}

function mobileValid(value: string, span: HTMLElement): boolean {
  const regex = /^[0-9\s-]*$/;
  const f = regex.test(value);
  if (!f) {
    console.log(span);
    span.textContent = `Некоректный номер телефона`;
  }
  return f;
}

function includeValid(
  value: string,
  checkedString: string,
  span: HTMLElement,
): boolean {
  const f = value.includes(checkedString);
  if (!f) {
    console.log(span);
    span.textContent = `Некоректный адрес почты`;
  }
  return f;
}

const validateField = (field: HTMLInputElement): boolean => {
  const SPAN: HTMLFormElement | null | undefined =
    field.parentElement?.querySelector(".input__err");
  if (!SPAN) {
    console.log(`element SPAN undefined|null in ${field}`);
    return false;
  }
  SPAN.textContent = "";
  switch (field.type) {
    case TYPES_INPUT.CHECKBOX:
      if (checkValid(field.checked, SPAN)) {
        return true;
      }
      return false;

    case TYPES_INPUT.TEXT:
      if (minLengthValid(field.value.length, 1, SPAN)) {
        return true;
      }
      return false;

    case TYPES_INPUT.TEL:
      if (mobileValid(field.value, SPAN)) {
        const count_numbers = field.value.match(/\d/g);
        return minLengthValid(
          (count_numbers ? count_numbers : "").length,
          10,
          SPAN,
        );
      }
      return false;

    case TYPES_INPUT.EMAIL:
      if (includeValid(field.value, "@", SPAN)) {
        return true;
      }
      return false;
  }
  return true;
};

if (FORM && REQUIRED_FIELDS) {
  FORM?.addEventListener("submit", (e: Event): void => {
    e.preventDefault();
    if (
      REQUIRED_FIELDS.every((field: HTMLInputElement): boolean => {
        return validateField(field);
      })
    ) {
      FORM.reset();
    }
  });
}
