/* eslint-disable react/prop-types */
export default function CategoryPanel({ img, label }) {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl px-10 py-5 hover:bg-gray-200 active:bg-gray-300">
      <img src={img} alt={label} className="w-16 rounded-full" />
      <b>{label}</b>
    </div>
  );
}
