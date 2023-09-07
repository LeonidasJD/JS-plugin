wp.blocks.registerBlockType("ourplugin/are-you-paying-attention", {
  // koristimo metodu biblioteke za kreiranje widgeta za gutenberg
  title: "Are you Paying Attention", //naziv i ikonica ce se naci u delu gde biramo koji widget zelimo da iskoristimo isto kao u elementoru npt ako hocemo da izaberemo heading widget
  icon: "smiley",
  edit: function () {
    return (
        <div>
             <h1>This is from JSX index JS</h1>
        </div>
      //koristimo JSX kako bi widget mogli da pravimo obicnim html kodom
    );
  },
  save: function () {
    return wp.element.createElement("h3", null, "Hello, this is from js save!"); //ono sto se ispisuje na frontendu na samoj stranici na sajtu (nije isto kao  u edit bloku).
    // argumenti su isti
    //PRIMER: unutar edita kreiramo widget kao sto je u elementoru npr heading widget kako
    //ce on da izgleda i to ,a u save jeste  podatak koji smo uneli u heading tag a to je test naseg naslova
    // i na samoj stranici ce se ispisati samo text naslova nece se videti ceo widget ili kreiramo isti widget kao u edit funkciji kako bi se ceo widget video
    //na stranici i sanjim mogli nesto da radimo .
  },
});
