const swap = (arr, indice1, indice2) => {
  const temp = arr[indice1];
  arr[indice1] = arr[indice2];
  arr[indice2] = temp;
};

const shuffle = (vetor, qntTrocas) => {
  for (let i = 0; i < qntTrocas; i++) {
    const indice1 = Math.floor(Math.random() * vetor.length);
    let indice2 = Math.floor(Math.random() * vetor.length);
    while (indice2 === indice1) {
      indice2 = Math.floor(Math.random() * vetor.length);
    }
    swap(vetor, indice1, indice2);
  }
};

const bubble_sort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) { 
    let isSwapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {  
        swap(arr, j, j + 1);
        isSwapped = true; 
      }
    }
    if (!isSwapped) break; 
  }
  return arr; 
}


const selection_sort = (arr) => {
  const n = arr.length; 
  for (let i = 0; i < n - 1; i++) { 
    let minIndex = i;
    for (let j = i + 1; j < n; j++) { 
      if (arr[j] < arr[minIndex]) {
        minIndex = j; 
      }
    }
    if (minIndex !== i) { 
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; 
    }
  }
  return arr; 
}

const quick_sort = (arr) => {
  if (arr.length <= 1) { 
    return arr;
  } else {
    const pivotIndex = Math.floor(arr.length / 2); 
    const [left, right] = partition(arr, pivotIndex); 
    return [...quick_sort(left), ...quick_sort(right)];
  }
}

const partition = (arr, pivotIndex) => {
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== pivotIndex) { 
      if (arr[i] < pivot) {
        left.push(arr[i]); 
      } else {
        right.push(arr[i]); 
      }
    }
  }
  return [left, right];
}