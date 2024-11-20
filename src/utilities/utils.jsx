export const handlePrint = (fileUrl) => {
  const iframe = document.createElement("iframe");
  iframe.style.position = "absolute";
  iframe.style.width = "0px";
  iframe.style.height = "0px";
  iframe.style.border = "none";
  iframe.src = fileUrl;

  document.body.appendChild(iframe);

  iframe.onload = () => {
    iframe.contentWindow.print();
  };
};