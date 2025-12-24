const e = React.createElement;

function App(){

 React.useEffect(()=>{

  // cursor
  const cursor = document.getElementById("cursor");
  if(cursor){
    window.addEventListener("mousemove",(ev)=>{
      cursor.style.left = ev.clientX + "px";
      cursor.style.top = ev.clientY + "px";
    });
  }

  // scroll animation
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll(){
    reveals.forEach(el=>{
      if(el.getBoundingClientRect().top < window.innerHeight - 120){
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

},[]);
}

ReactDOM.createRoot(document.getElementById("root")).render(e(App));
