export default function outsideEvent(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleClick);
      });
      callback();
    }
  }
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleClick);
      });
    });
    element.setAttribute(outside, '');
  }
}
