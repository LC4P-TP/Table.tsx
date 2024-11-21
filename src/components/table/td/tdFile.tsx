import "./td.scss";
import link from "../../../assets/link.png";

const tFile = "File.file";

const testService = {
  getFunction: (value: string) => new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (typeof value === "string") {
        resolve(tFile);
      } else {
        reject(new Error("somehting went wrong"));
      }
    }, 1000);
  }),
};

const getFile = async (value: string) => {
  await testService.getFunction(value);
};
//   .then((respoce: File) => respoce.json())
//   .then(({respoce}) => {
//     const { buffer } = Uint8Array.from(window.atob(respoce), (string) => string.charCodeAt(0));
//     const objectURL = URL.createObjectURL(new Blob([buffer], { type: "application/pdf"}));
//     window.open(objectURL, "_blank")
//   });

export function TdFile({ value }: { value: string }) {
  return (
    <td>
      <div className="boxWrapper">
        <button type="button" className="tableImageBatton" onClick={() => getFile(value)}>
          <img src={link} alt="imageLink" />
        </button>
      </div>
    </td>
  );
}
