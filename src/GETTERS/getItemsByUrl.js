export default async function(url) {
  let object = await fetch(url);
  let text = await object.text();
  let listItems = await JSON.parse(text);
return listItems
}

