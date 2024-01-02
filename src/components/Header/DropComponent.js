import NavDropdown from "react-bootstrap/NavDropdown";
// import countriesHome from "../Content/CountriesInfo/CountriesHome";

function DropComponent(props) {
  return (
    <div>
      <NavDropdown
        id="nav-dropdown-light-example"
        title={props.title}
        menuVariant="light"
        data-bs-theme="light"
        className="li-item-cust"
      >
        {props.content.map((country, index) => (
          <NavDropdown.Item href={`/country/${country.id}`}>
            {country.country}
          </NavDropdown.Item>
        ))}
        {/* <NavDropdown.Item href="#action/3.1">Spain</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Poland</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Turkey</NavDropdown.Item> */}
      </NavDropdown>
    </div>
  );
}

export default DropComponent;
