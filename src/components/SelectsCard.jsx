import PropTypes from 'prop-types'; // Adaugă această linie la începutul fișierului

const SelectsCard = (props) => {
  return (
    <div className="relative">
      <img
        className="w-full h-full object-cover"
        src={props.bg}
        alt="Maldives"
      />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
          {props.text}
        </p>
      </div>
    </div>
  );
};

SelectsCard.propTypes = {
  bg: PropTypes.string.isRequired, // Verificăm că 'bg' este un string și este obligatoriu
  text: PropTypes.string.isRequired, // Verificăm că 'text' este un string și este obligatoriu
};

export default SelectsCard;
