import allCards from './cards';

const data = allCards.data

export function filterByIdentity(side) {
  console.log(`clickity click click filters.js`)
  return data.filter((el) => 
      (el["type_code"] === "identity") && (el["side_code"] === side) ? true : null
  );
}

export default filterByIdentity;