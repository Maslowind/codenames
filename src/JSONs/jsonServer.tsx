const base_url = "https://codenames-json-server.herokuapp.com/list"

export const loadData = () => {
    return fetch(base_url)
    .then(res=>res.json())
}

export const createList = (list:any) => {
    return (async () => {
        const rawResponse = await fetch(base_url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(list)
        });
        const content = await rawResponse.json();
      
      })();
}
export const deleteList = () => {
    return (async () => {
        const rawResponse = await fetch(base_url, {
          method: 'DELETE'          
        });
        const content = await rawResponse.json();
      
      })();
}