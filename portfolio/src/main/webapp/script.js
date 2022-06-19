// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['WUSTL', 'football fan', '郑子豪', 'Nice to meet you'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function addHello() {
    const getWord = await fetch('/hello');
    const textFromResponse = await getWord.text();
  
    const word = document.getElementById('Say');
    word.innerText = textFromResponse;
  }
async function getServerStats() {
    const responseFromServer = await fetch('/hello');
    // The json() function returns an object that contains fields that we can
    // reference to create HTML.
    const stats = await responseFromServer.json();
    console.log(stats[0]);

  }


  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  
  /** Fetches color data and uses it to create a chart. */
  function drawChart() {
    fetch('/color-data').then(response => response.json())
    .then((colorVotes) => {
      const data = new google.visualization.DataTable();
      data.addColumn('string', 'Color');
      data.addColumn('number', 'Votes');
      Object.keys(colorVotes).forEach((color) => {
        data.addRow([color, colorVotes[color]]);
      });
  
      const options = {
        'title': 'Favorite Colors',
        'width':600,
        'height':500
      };
  
      const chart = new google.visualization.LineChart(
          document.getElementById('chart-container'));
      chart.draw(data, options);
    });
  }
  
  function createMap() {
    const map = new google.maps.Map(
        document.getElementById('map'),
        {center: {lat: 37.422, lng: -122.084}, zoom: 16});
  }

  function loadTasks() {
    fetch('/list-tasks').then(response => response.json()).then((tasks) => {
      const taskListElement = document.getElementById('task-list');
      tasks.forEach((task) => {
        taskListElement.appendChild(createTaskElement(task));
      })
    });
  }
  
  /** Creates an element that represents a task, including its delete button. */
  function createTaskElement(task) {
    const taskElement = document.createElement('li');
    taskElement.className = 'task';
  
    const titleElement = document.createElement('span');
    titleElement.innerText = task.title;
    taskElement.appendChild(titleElement);
    return titleElement;
  }
  
  
  