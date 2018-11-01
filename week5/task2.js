function increase() {
  const image  = event.currentTarget;

  document.querySelector("#bigImage img").src = image.src;
	
}
document.querySelector("#carousel img:nth-of-type(1)").addEventListener("click",increase);
document.querySelector("#carousel img:nth-of-type(2)").addEventListener("click",increase);
document.querySelector("#carousel img:nth-of-type(3)").addEventListener("click",increase);
document.querySelector("#carousel img:nth-of-type(4)").addEventListener("click",increase);
document.querySelector("#carousel img:nth-of-type(5)").addEventListener("click",increase);










