let percentage = 0;

function updateBar(bar, percentage){
  if (percentage > 100){
    bar.classList.remove("loading_active");
    percentage = 100;
  } else {
    bar.classList.add("loading_active");
  }
  const inner_spans = Array.from(bar.getElementsByTagName('SPAN'));
  inner_spans[0].style.width = `${percentage}%`;
  inner_spans[1].innerText = `${Math.floor(percentage)}%`;
}

Array.from(document.getElementsByClassName('loading_bar')).forEach(bar => {
  bar.append(document.createElement('SPAN'));
  bar.append(document.createElement('SPAN'));
  bar.classList.add("loading_active");
  /////////////////////////////////////////////////////
  const intervalID = setInterval(() => {
    updateBar(bar, percentage);
    percentage = percentage + 0.1;
    if (percentage > 100)
      percentage = 0;
  }, 20);
  /////////////////////////////////////////////////////
});
