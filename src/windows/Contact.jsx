import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/tarjan.jpg"
          alt="Tarjan"
          className="w-20 rounded-full"
        />

        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to squash? Or just want to talk tech?, I'm in.</p>
        <p>tarjanbawankule1@gmail.com</p>

        <ul>
          {socials.map(({ id, bg, icon, link, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a href={link} target="_blank" rel="noopener noref">
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
