import Fuse from 'fuse.js'

export type FuseDataItem = {
  title: string
  content: string
  url: string
}

const options = {
  keys: ['title', 'content'],
  threshold: 0.3,
  minMatchCharLength: 3,
  findAllMatches: true,
  includeMatches: true,
  includeScore: true,
  shouldSort: true,
  useExtendedSearch: true,
  ignoreLocation: true,
  ignoreFieldNorm: true,
  ignoreLocation: true,
}

const data: FuseDataItem[] = [];
const fuse = new Fuse(data, options);

const customFuse = {
  ...fuse,
  add: (item: FuseDataItem) => {
    fuse.add(item)
  }
}

function Search() {
  // const [searchResults, setSearchResults] = useState<Fuse.FuseResult<FuseDataItem>[]>([])

  // const search = (query: string) => {
  //   const results = customFuse.search(query)
  //   setSearchResults(results)
  // }

  return (
    <div>
      {/*    <input onChange={(e) => search(e.target.value)} />
      {searchResults.map((result) => (
        <div key={result.item.url}>
          <a href={result.item.url}>{result.item.title}</a>
        </div>
      ))}*/}
    </div>
  )
}
export default Search;
