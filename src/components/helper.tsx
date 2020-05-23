import { getWords, getNumbers } from '../JSONs/getInputData'
import { loadData, createList, deleteList } from '../JSONs/jsonServer'

class Main {
  constructor(
    public id: number,
    public words: string,
    public numbers: number
  ) { }
}
export function listGenerator() {
  const word_massive = getWords();
  let number_massive = getNumbers();
  resortArray(word_massive);
  resortArray(number_massive);
  let list = [];
  for (let i = 0; i < number_massive.length; i++) {
    list[i] = new Main(i, word_massive[i], number_massive[i])

  }
  deleteList();
  createList(list);
  const oldGrid = document.getElementById('GridCon');
  if (oldGrid) oldGrid.remove();
  const oldGridTable = document.getElementById('GridTable');
  if (oldGridTable) oldGridTable.remove();
}

function resortArray(data: any[]) {
  for (let i = data.length - 1; i >= 1; i--) {
    let j = Math.floor(Math.random() * Math.floor(i + 1));
    var temp = data[j];
    data[j] = data[i];
    data[i] = temp;
  }
  return data;
}

export function getField() {
  const colorFieldDiv = document.getElementById('ColorField');
  const oldGrid = document.getElementById('GridCon');
  if (oldGrid) oldGrid.remove();
  const myDiv = document.createElement("div");
  myDiv.id = 'GridCon'
  loadData().then(data => {
    for (let i = 0; i < 25; i++) {
      let btn = document.createElement("button");
      btn.id = "btn" + data[i].id;
      //let t = document.createTextNode(`${i + 1}`);
      if (data[i].numbers === -1)
        btn.className = "DarkgreyFieldBut";
      else if (data[i].numbers === 0)
        btn.className = "LightFieldBut";
      else if (data[i].numbers === 1)
        btn.className = "RedFieldBut";
      else
        btn.className = "BlueFieldBut";
      //btn.appendChild(t);
      myDiv.appendChild(btn);
    }
  })
  colorFieldDiv?.appendChild(myDiv);
  return myDiv;
}

export function getTable() {
  const colorFieldDiv = document.getElementById('ColorTable');
  const oldGrid = document.getElementById('GridTable');
  if (oldGrid) oldGrid.remove();
  const myDiv = document.createElement("div");
  myDiv.id = 'GridTable'
  loadData().then(data => {
    for (let i = 0; i < 25; i++) {
      let btn = document.createElement("button");
      btn.id = data[i].id;
      let t = document.createTextNode(`${data[i].words}`);
      btn.className = "Whitebutton";
      btn.onclick = function butClick() {
        let btn = document.getElementById(`${i}`);
        if (btn) {
          if (data[i].numbers === -1)
            btn.className = "Darkgreybutton";
          else if (data[i].numbers === 0)
            btn.className = "Lightbutton";
          else if (data[i].numbers === 1)
            btn.className = "Redbutton";
          else
            btn.className = "Bluebutton";

        }
      };
      btn.appendChild(t);
      myDiv.appendChild(btn);
    }
  })
  colorFieldDiv?.appendChild(myDiv);
  return myDiv;
}
