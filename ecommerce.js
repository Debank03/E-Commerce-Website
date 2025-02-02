function quickSort(arr, sortOrder) {
  if (arr.length <= 1) {
      return arr;
  }

  var pivot = arr[0];
  var left = [];
  var right = [];

  for (var i = 1; i < arr.length; i++) {
      if ((sortOrder === 'asc' && arr[i] < pivot) || (sortOrder === 'desc' && arr[i] > pivot)) {
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      }
  }

  return quickSort(left, sortOrder).concat(pivot, quickSort(right, sortOrder));
}

function sortProducts(sortOrder) {
  var container = document.querySelector('.container');
  var items = Array.from(container.children);

  var sortedItems = [];

  items.forEach(item => {
      sortedItems.push({
          element: item,
          price: parseInt(item.querySelector('.price').innerText)
      });
  });

  sortedItems = sortedItems.sort((a, b) => {
      if (sortOrder === 'asc') {
          return a.price - b.price;
      } else {
          return b.price - a.price;
      }
  });

  sortedItems.forEach((item, index) => {
      container.appendChild(item.element);
  });
}
