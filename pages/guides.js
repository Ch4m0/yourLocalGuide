import Guide from "../components/guides/guide";
import { Filter } from "../components/guides/filter/filter";



export default function Guides() {
  const list = [{id:200}, {id:300}, {id:400}, {id:500}, {id:600}, {id:700}];

  const gap  = {
    gap: '1rem'
  }

  return (
    <section className="is-centered container columns">

    <div className="column is-3">
      <Filter></Filter>
    </div>

    <div className={`container is-flex is-flex-wrap-wrap column`} style={gap}>
        { list.map((item) => (
            <Guide {...item}  key={item}></Guide>
        ))}
    </div>

    </section>
  );
}
