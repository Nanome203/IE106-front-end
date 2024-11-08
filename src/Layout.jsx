import { Outlet } from "react-router-dom";
import electronics from "./assets/electronics.jpg";
import utensils from "./assets/utensils.jpg";
import toys from "./assets/toys.jpg";
import books from "./assets/books.jpg";
import clothes from "./assets/clothes.jpg";
import furniture from "./assets/furniture.jpg";
import fb from "./assets/food-beverage.jpg";
import games from "./assets/games.jpg";
import housewares from "./assets/housewares.jpg";
import others from "./assets/others.png";
import CategoryPanel from "./atom/CategoryPanel";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: electronics,
  },
  {
    id: 2,
    name: "Kitchen Utensils",
    image: utensils,
  },
  {
    id: 3,
    name: "Toys",
    image: toys,
  },
  {
    id: 4,
    name: "Books",
    image: books,
  },
  {
    id: 5,
    name: "Clothes",
    image: clothes,
  },
  {
    id: 6,
    name: "Housewares",
    image: housewares,
  },
  {
    id: 7,
    name: "Food & Beverage",
    image: fb,
  },
  {
    id: 8,
    name: "Games",
    image: games,
  },
  {
    id: 9,
    name: "Furniture",
    image: furniture,
  },
  {
    id: 10,
    name: "Others",
    image: others,
  },
];
function Logo() {
  return (
    <div className="flex items-center gap-1">
      <img
        className="w-20 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Hj4y2s5GbHXpbYcy92sY-0Tg-NEmbfSq-Q&s"
      />
      <span className="font-[Oswald] text-5xl">TechMart</span>
    </div>
  );
}

export default function Layout() {
  return (
    <div className="flex flex-col">
      <header>
        <div id="utilities" className="flex h-32 w-screen bg-[#87CDD8]">
          <div id="logo-wrapper" className="h-full w-1/3 p-5">
            <Logo />
          </div>
          <div
            id="search-bar-wrapper"
            className="flex h-full w-1/3 items-center justify-center"
          >
            <div className="flex w-full items-center">
              <input
                type="search"
                className="h-10 w-full rounded-s-full px-5 outline-none"
                placeholder="Search here"
              />
              <i className="fa-solid fa-magnifying-glass flex h-10 cursor-pointer items-center justify-center rounded-e-full bg-gray-300 p-3 text-xl hover:bg-gray-500 hover:text-white active:bg-gray-700"></i>
            </div>
          </div>
          <div
            id="util-buttons"
            className="flex h-full w-1/3 items-center justify-end gap-5"
          >
            <button
              type="button"
              className="h-16 w-32 rounded-xl bg-[#3B5384] text-white hover:bg-[#1e325a] active:bg-[#1e396e]"
            >
              Cart
            </button>
            <button
              type="button"
              className="mr-6 h-16 w-32 rounded-xl bg-[#3B5384] text-white hover:bg-[#1e325a] active:bg-[#1e396e]"
            >
              Account
            </button>
          </div>
        </div>
        <div
          id="categories"
          className="flex h-40 w-screen items-center justify-evenly py-20"
        >
          {categories.map((categoriesItem) => (
            <CategoryPanel
              key={categoriesItem.id}
              img={categoriesItem.image}
              label={categoriesItem.name}
            />
          ))}
        </div>
      </header>
      {/* <h1 className="mb-10 text-[100px] font-bold text-red-700">
        Hello world!
      </h1> */}
      <Outlet />
      <footer className="flex min-h-56 w-screen flex-col items-center justify-center gap-1 bg-[#87CDD8] py-10">
        <div id="information" className="flex w-screen justify-center gap-24">
          <div id="about-us" className="flex flex-col items-center gap-2">
            <b className="text-[20px]">ABOUT</b>
            <span>About Us</span>
            <span>Blog</span>
            <span>Contact Us</span>
            <span>Reviews</span>
          </div>
          <div
            id="privacy-services"
            className="flex flex-col items-center gap-2"
          >
            <b className="text-[20px]">PRIVACY AND SERVICES</b>
            <span>Privacy Policy</span>
            <span>Reviews</span>
            <span>Job Opinions</span>
            <span>Terms & Conditions</span>
          </div>
          <div id="shopping" className="flex flex-col items-center gap-2">
            <b className="text-[20px]">SHOPPING</b>
            <span>Gifts Cards</span>
            <span>FAQ</span>
            <span>Return Policy</span>
            <span>Online Catalogue</span>
            <span>Search</span>
          </div>
          <div id="account" className="flex flex-col items-center gap-2">
            <b className="text-[20px]">ACCOUNT</b>
            <span>Log In</span>
            <span>Sign Up</span>
            <span>Delete Account</span>
            <span>Premium Package</span>
          </div>
        </div>
        <Logo />
        <b>&copy;2024. All Right Reserved.</b>
      </footer>
    </div>
  );
}
