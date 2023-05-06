export {};

declare global {
  interface Document {
    lazyLoadInstance: any;
  }

  interface Window {
    gtag: any;
  }
}
