// Decorative double-line marker shown before a company name.
export const Lines = () => (
  <span
    className={
      'relative inline-flex h-8 w-[2.5rem] mr-8 ' +
      "before:content-[''] before:absolute before:bg-primary before:h-[0.2rem] before:w-[2.5rem] before:-translate-y-1/2 before:left-4 before:top-[calc(50%-0.3rem)] " +
      "after:content-[''] after:absolute after:bg-primary after:h-[0.2rem] after:w-[2.5rem] after:-translate-y-1/2 after:top-[calc(50%+0.3rem)]"
    }
  />
);
