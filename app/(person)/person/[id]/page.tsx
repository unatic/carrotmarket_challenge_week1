import { API_URL } from "../../../constants";

export async function getPerson(id: string) {
  console.log(id);
  const response = await fetch(`${API_URL}person/${id}`);
  const json = await response.json();
  return json;
}

export default async function PersonDetail({ params }) {
  const { id } = await params;
  const person = await getPerson(id);
  console.log(person);
  return (
    <div>
      <p>{person.id}</p>
      <p>Country: {person.country}</p>
      <p>Industry: {person.industries.join(", ")}</p>
      <p>{person.bio.join(" ")}</p>
    </div>
  );
}
