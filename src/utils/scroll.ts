/**
 * 浏览器滚动兼容
 */
export function getScrollTop() {
  return (
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    document.body.scrollTop
  );
}

export function setScrollTop(scrollTop: number) {
  document.documentElement.scrollTop = scrollTop;
  document.body.scrollTop = scrollTop;
}
