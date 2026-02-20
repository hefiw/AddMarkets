const FORM: HTMLFormElement | null = document.querySelector("#check");
const REQUIRED_FIELDS: Array<HTMLInputElement> = Array.from(document.querySelectorAll('#check *:required'));
enum TYPES_INPUT {
    TEXT = "text",
    TEL = "tel",
    EMAIL = "email",
    CHECKBOX = "checkbox"
}

const validateField = (field: HTMLInputElement): boolean => {
    switch (field.type) {
        case TYPES_INPUT.CHECKBOX:
            return field.checked;
        
        case TYPES_INPUT.TEXT:
            return field.value.length > 1;
        
        case TYPES_INPUT.TEL:
            const regex = /^[0-9\s-]*$/;
            const count_numbers = field.value.match(/\d/g);
            if (!count_numbers) {
                return false;
            }
            return regex.test(field.value)&&count_numbers.length>10;
        
        case TYPES_INPUT.EMAIL:
            return field.value.includes("@");
    }
    return true;
};

if (FORM&&REQUIRED_FIELDS) {
  FORM?.addEventListener("submit", (e: Event): void => {
    e.preventDefault();
    if (REQUIRED_FIELDS.every((field: HTMLInputElement): boolean => {
        return validateField(field);
      })
    ) {
      FORM.reset();
    }
  });
}
