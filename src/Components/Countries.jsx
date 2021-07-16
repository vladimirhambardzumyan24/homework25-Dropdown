import CountriesItem from "./CountriesItem";

export default function Countries({ searchCountriesData }) {
  return (
    <>
      {searchCountriesData.map((country) => (
        <CountriesItem countryName={country.name} countryFlag={country.flag} key={country.name}/>
      ))}
    </>
  );
}
