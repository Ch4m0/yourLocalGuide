import searchStyles from '../../styles/search.module.scss'

export default function Search() {

  return (
    <div  className={`field has-addons  ${searchStyles.searchDestination}`}>
      <div class="control is-expanded">
        <input
          type="text"
          class="input is-info is-medium"
          placeholder="Where's your next adventure?"
        />
      </div>
      <div class="control">
        <a class="button isYellow is-medium">Search</a>
      </div>
    </div>
  );
}
