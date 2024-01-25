const testService = {
  getFunction: (value: string) => {
    alert(value);
  },
};

const getFile = (value: string) => {
  async () => {
    await testService.getFunction(value);
    //   .then((respoce: File) => respoce.json())
    //   .then(({respoce}) => {
    //     const { buffer } = Uint8Array.from(window.atob(respoce), (string) => string.charCodeAt(0));
    //     const objectURL = URL.createObjectURL(new Blob([buffer], { type: "application/pdf"}));
    //     window.open(objectURL, "_blank")
    //   });
  };
};

export const TdText = ({ key, value }: { key: string; value: string }) => {
  return (
    <td key={key}>
      <button type="button" onClick={() => getFile(value)}>
        File link
      </button>
    </td>
  );
};
