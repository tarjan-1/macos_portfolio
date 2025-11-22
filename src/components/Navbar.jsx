import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo"></img>
        <p className="font-bold">Tarjan's Portfolip</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`}></img>
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
