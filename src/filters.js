import allCards from './cards';

const data = allCards.data

export function filterByIdentity() {
  return data.filter(function(el) {
      if (el["type_code"] === "identity") {
        return true;
      }
  });
}

export function filterByAllIdentities() {
  return data.filter(function(el) {
      if (el["type_code"] === "identity") {
        return true;
      }
  });
}

// export default filterByIdentity;