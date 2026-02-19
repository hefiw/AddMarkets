import "./styles/main.scss";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

new Swiper(".tarifs__swiper.swiper", {
  // modules: [Navigation, Pagination],
  // spaceBetween: 30,
  // slidesPerView: 3,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

document.querySelectorAll<HTMLElement>('[class*="gap-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("gap-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.gap = `${value}px`;
  }
});

document
  .querySelectorAll<HTMLElement>('[class*="gapRow-"]')
  .forEach((element) => {
    const classes = Array.from(element.classList);
    const fclass = classes.find((c) => c.startsWith("gapRow-"));
    if (fclass) {
      const value = fclass.split("-")[1];
      element.style.rowGap = `${value}`;
    }
  });

document
  .querySelectorAll<HTMLElement>('[class*="gapColumn-"]')
  .forEach((element) => {
    const classes = Array.from(element.classList);
    const fclass = classes.find((c) => c.startsWith("gapColumn-"));
    if (fclass) {
      const value = fclass.split("-")[1];
      element.style.columnGap = `${value}`;
    }
  });

//sizes
document.querySelectorAll<HTMLElement>('[class*="w-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("w-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.width = `${value}`;
  }
});

document
  .querySelectorAll<HTMLElement>('[class*="maxw-"]')
  .forEach((element) => {
    const classes = Array.from(element.classList);
    const fclass = classes.find((c) => c.startsWith("maxw-"));
    if (fclass) {
      const value = fclass.split("-")[1];
      element.style.maxWidth = `${value}`;
    }
  });

document
  .querySelectorAll<HTMLElement>('[class*="minw-"]')
  .forEach((element) => {
    const classes = Array.from(element.classList);
    const fclass = classes.find((c) => c.startsWith("minw-"));
    if (fclass) {
      const value = fclass.split("-")[1];
      element.style.minWidth = `${value}`;
    }
  });

document.querySelectorAll<HTMLElement>('[class*="h-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("h-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.height = `${value}`;
  }
});

//pading
document.querySelectorAll<HTMLElement>('[class*="p-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("p-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.padding = `${value}px`;
  }
});

document.querySelectorAll<HTMLElement>('[class*="pt-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("pt-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.paddingTop = `${value}px`;
  }
});

document.querySelectorAll<HTMLElement>('[class*="pb-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("pb-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.paddingBottom = `${value}px`;
  }
});

document.querySelectorAll<HTMLElement>('[class*="pr-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("pr-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.paddingRight = `${value}px`;
  }
});

document.querySelectorAll<HTMLElement>('[class*="pl-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("pl-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.paddingLeft = `${value}px`;
  }
});

//margin
document.querySelectorAll<HTMLElement>('[class*="m-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("m-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.margin = `${value}px`;
  }
});

document.querySelectorAll<HTMLElement>('[class*="mt-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("mt-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.marginTop = `${value}px`;
  }
});

document.querySelectorAll<HTMLElement>('[class*="mb-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("mb-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.marginBottom = `${value}px`;
  }
});

document.querySelectorAll<HTMLElement>('[class*="mr-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("mr-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.marginRight = `${value}px`;
  }
});

document.querySelectorAll<HTMLElement>('[class*="ml-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("ml-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.marginLeft = `${value}`;
  }
});

//borders
document
  .querySelectorAll<HTMLElement>('[class*="bord-"]')
  .forEach((element) => {
    const classes = Array.from(element.classList);
    const fclass = classes.find((c) => c.startsWith("bord-"));
    if (fclass) {
      const value = fclass.split("-")[1];
      element.style.borderWidth = `${value}`;
    }
  });

document
  .querySelectorAll<HTMLElement>('[class*="bordColor-"]')
  .forEach((element) => {
    const classes = Array.from(element.classList);
    const fclass = classes.find((c) => c.startsWith("bordColor-"));
    if (fclass) {
      const value = fclass.split("-")[1];
      element.style.borderColor = `${value}`;
    }
  });

document
  .querySelectorAll<HTMLElement>('[class*="bordRad-"]')
  .forEach((element) => {
    const classes = Array.from(element.classList);
    const fclass = classes.find((c) => c.startsWith("bordRad-"));
    if (fclass) {
      const value = fclass.split("-")[1];
      element.style.borderRadius = `${value}px`;
    }
  });

//fonts
document.querySelectorAll<HTMLElement>('[class*="fw-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("fw-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.fontWeight = `${value}`;
  }
});

document.querySelectorAll<HTMLElement>('[class*="fz-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("fz-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.fontSize = `${value}px`;
  }
});

document.querySelectorAll<HTMLElement>('[class*="lh-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("lh-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.lineHeight = `${value}`;
  }
});

//position
document.querySelectorAll<HTMLElement>('[class*="top-"]').forEach((element) => {
  const classes = Array.from(element.classList);
  const fclass = classes.find((c) => c.startsWith("top-"));
  if (fclass) {
    const value = fclass.split("-")[1];
    element.style.top = `${value}`;
  }
});

document
  .querySelectorAll<HTMLElement>('[class*="bottom-"]')
  .forEach((element) => {
    const classes = Array.from(element.classList);
    const fclass = classes.find((c) => c.startsWith("bottom-"));
    if (fclass) {
      const value = fclass.split("-")[1];
      element.style.bottom = `${value}`;
    }
  });

document
  .querySelectorAll<HTMLElement>('[class*="right-"]')
  .forEach((element) => {
    const classes = Array.from(element.classList);
    const fclass = classes.find((c) => c.startsWith("right-"));
    if (fclass) {
      const value = fclass.split("-")[1];
      element.style.right = `${value}`;
    }
  });

document
  .querySelectorAll<HTMLElement>('[class*="left-"]')
  .forEach((element) => {
    const classes = Array.from(element.classList);
    const fclass = classes.find((c) => c.startsWith("left-"));
    if (fclass) {
      const value = fclass.split("-")[1];
      element.style.left = `${value}`;
    }
  });
