const e = React.createElement;

function App(){

  React.useEffect(()=>{

    // cursor
    const cursor = document.getElementById("cursor");
    window.addEventListener("mousemove",(ev)=>{
      cursor.style.left = ev.clientX + "px";
      cursor.style.top = ev.clientY + "px";
    });

    // scroll animation
    const sections = document.querySelectorAll(".section");
    window.addEventListener("scroll",()=>{
      sections.forEach(sec=>{
        if(sec.getBoundingClientRect().top < window.innerHeight - 120){
          sec.classList.add("show");
        }
      })
    });

  },[]);

  return e("div", null,
    /* HERO */
    e("section",{className:"hero"},
      e("div",{className:"hero-content"},
        e("h2",null,"Luxury Dining Experience"),
        e("p",null,"Indulge in a world of fine flavors, elegant ambiance and unforgettable moments crafted by master chefs."),
        e("button",null,"Reserve Your Table")
      )
    ),

  );
  
}

ReactDOM.createRoot(document.getElementById("root")).render(e(App));
