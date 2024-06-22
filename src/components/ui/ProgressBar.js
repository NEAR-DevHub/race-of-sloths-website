export const ProgressBar = ({ value }) => (
  <div className="bg-[#353535] rounded-full w-full flex justify-end">
    <div
      style={{
        width: `${value || 1}%`,
        background:
          value < 33
            ? "linear-gradient(90deg, #FF8947 0%, #D80027 100%)"
            : value >= 33 && value < 66
            ? "linear-gradient(90deg, #A9C20D 0%, #CBAB02 100%)"
            : "linear-gradient(90deg, #0DC268 0%, #06CB02 100%)",
      }}
      className={`h-[16px] rounded-full`}
    ></div>
  </div>
);
