export default function Countries({ countryName, countryFlag }) {
  return (
    <div className="country">
      <img className="image" src={countryFlag} alt={countryName}></img>
      <span className="country-name">{countryName}</span>
    </div>
  );
}
