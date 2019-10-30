import allCards from './cards';

const data = allCards.data

// export function filterByIdentity() {
//   console.log(`clickity click click filters.js`)
//   return data.filter((el) => 
//       (el["type_code"] === "identity") && (el["side_code"] === this.props.side) ? true : null
//   );
// }

export function filterByFactionIdentity(side, faction) {
  debugger
  side = data.filter((el) => (el["type_code"] === "identity") ) ? true : null
  faction = data.filter((el) => (el["type_code"] === "identity") && (el["side_code"] === this.props.side)) ? true : null

  if (faction) {
    console.log(faction)
  } else {
    console.log(side)
  }

}

export default filterByFactionIdentity;