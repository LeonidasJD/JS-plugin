//JS FAJL U KOME KREIRAMO FRONTEND NASEG BLOKA

import {TextControl, Flex, FlexBlock,FlexItem,Button,Icon} from "@wordpress/components"// dependency koji nam sluze da koristimo react i umesto da pisemo dug html mi koristimo react-ove elemente
import "./index.scss"

wp.blocks.registerBlockType("ourplugin/are-you-paying-attention", {
  // koristimo metodu biblioteke za kreiranje widgeta za gutenberg
  title: "Are you Paying Attention", //naziv i ikonica ce se naci u delu gde biramo koji widget zelimo da iskoristimo isto kao u elementoru npt ako hocemo da izaberemo heading widget
  icon: "smiley",
  category:"common",
  attributes:{

    question:{type: "string"}, //atributi u kojima se postavlja vrednost iz inputa i kasnije ispisuju na frontu
    answer:{type: "string"},
  },
  edit: function (props) {


    function updateQuestion(value){
      props.setAttributes({question: value})
    }

    function updateAnswer(value){
      props.setAttributes({answer: value})
    }

   

    return (// kreirali smo JSX i napravili widget gde smo postavili dva inputa 
    // sta god napisemo u imputima vrednost inputa se postavlja u atribute skyColor i grassColor. 
        <div className="paying-attention-edit-block">
            <TextControl value={props.attributes.question} label="Question:" onChange={updateQuestion} style={{fontSize: "20px"}}/>
            <p style={{fontSize:"13px", margin:"20px 0px 8px 0px"}}>Answers:</p>
            <Flex>
              <FlexBlock>
              <TextControl value={props.attributes.answer} onChange={updateAnswer}/>
              </FlexBlock>
                <FlexItem>
                  <Button>
                    <Icon className="mark-as-correct" icon="star-empty"></Icon>
                  </Button>
                </FlexItem>
                <FlexItem>
                  <Button isLink className="attention-delete">Delete</Button>
                </FlexItem>
              
            </Flex>
            <Button isPrimary> Add another answer</Button>
            
        </div>
      //koristimo JSX kako bi widget mogli da pravimo obicnim html kodom
    );
  },
  save: function () {// funkcija vraca null ali smo napravili callback u php fajlu i funkciju koja kreira sta ce se ispisati na frontu
    return null
    
  },
});
