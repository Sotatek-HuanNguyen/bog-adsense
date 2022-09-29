import NavItems from "./NavItems";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between border-b py-5">
      <h1 className="text-2xl font-extrabold text-gray-900">Harky Nguyen</h1>
      <NavItems />
    </div>
  );
};

export default Header;
