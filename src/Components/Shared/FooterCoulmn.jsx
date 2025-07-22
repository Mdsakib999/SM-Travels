export const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2 text-sm">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.to}
            className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm font-medium inline-block transform"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
