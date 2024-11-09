/* eslint-disable react/prop-types */
export default function CategoryPanel({ img, label }) {
  return (
    <div className="flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center gap-2 rounded-xl hover:bg-gray-200 active:bg-gray-300">
      <img src={img} alt={label} className="w-10 rounded-full" />
      <b className="text-[13px]">{label}</b>
    </div>
  );
}
