import "./td.scss";
import link from "../../../assets/link.png";

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

export const TdFile = ({ value }: { value: string }) => {
  return (
    <td>
      <div className="boxWrapper">
        <button type="button" className="tableImageBatton" onClick={() => getFile(value)}>
          <img src={link} alt="imageLink" />
        </button>
      </div>
    </td>
  );
};
