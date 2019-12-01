function ajax(src, callback) {
  // your code here
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    console.log(xhr.responseText);
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(xhr.responseText);
      } else {
        alert(`[${xhr.status}] ${xhr.statusText}`);
      }
    }

    xhr.open('GET', src);
    xhr.send();
  };
}
function render(data) {
  // your code here.
  //  document.createElement()  and appendChild()  methods are preferred.
  const dataDiv = document.createElement('div');
  dataDiv.appendChild(JSON.stringify(data));
}

ajax(
  'https://cwpeng.github.io/live-records-samples/data/products.json',
  function(response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page
