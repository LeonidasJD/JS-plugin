//JS FAJL U KOME KREIRAMO FRONTEND NASEG BLOKA

wp.blocks.registerBlockType("ourplugin/are-you-paying-attention", {
  // koristimo metodu biblioteke za kreiranje widgeta za gutenberg
  title: "Are you Paying Attention", //naziv i ikonica ce se naci u delu gde biramo koji widget zelimo da iskoristimo isto kao u elementoru npt ako hocemo da izaberemo heading widget
  icon: "smiley",
  category:"common",
  attributes:{

    skyColor:{type: "string"}, //atributi u kojima se postavlja vrednost iz inputa i kasnije ispisuju na frontu
    grassColor:{type: "string"},
  },
  edit: function (props) {
    function updateSkyColor(event){
      props.setAttributes({skyColor:event.target.value})
    }

    function updateGrassColor(event){
      props.setAttributes({grassColor:event.target.value})
    }

    return (// kreirali smo JSX i napravili widget gde smo postavili dva inputa 
    // sta god napisemo u imputima vrednost inputa se postavlja u atribute skyColor i grassColor. 
        <div>
            <input type="text" placeholder="sky color" value={props.attributes.skyColor} onChange={updateSkyColor}/> 
            <input type="text" placeholder="grass color" value={props.attributes.grassColor} onChange={updateGrassColor} />
        </div>
      //koristimo JSX kako bi widget mogli da pravimo obicnim html kodom
    );
  },
  save: function () {// funkcija vraca null ali smo napravili callback u php fajlu i funkciju koja kreira sta ce se ispisati na frontu
    return null
    
  },
});
