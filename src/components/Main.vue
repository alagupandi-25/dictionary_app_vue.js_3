<template>
    <div class="wrapper" :class="{'active':isactive}">
        <header>English Dictionary</header>
            <div class="search">
                <input type="text" @keypress.enter="getvalue" v-model="inputvalue" placeholder="Search a word" required spellcheck="false">
                <i class="fas fa-search"></i>
                <span v-if="!this.inputvalue.trim() == ''" @click="clearvalue" class="material-icons">close</span>
            </div>
            <p class="info-text">{{ infoText }}</p>
            <ul>
                <li class="word">
                    <div class="details">
                        <p>{{ inputvalue }}</p>
                        <span>{{ partOfSpeech }}</span>
                    </div>
                    <i v-if="this.audio" @click="this.audio.play();" class="fas fa-volume-up"></i>
                </li>
                <div class="content">
                    <li class="meaning">
                        <div class="details">
                            <p>Meaning</p>
                            <span>{{ meaning }}</span>
                        </div>
                    </li>
                    <li v-if="this.example" class="example">
                        <div class="details">
                            <p>Example</p>
                            <span>{{ example }}</span>
                        </div>
                    </li>
                    <li v-if="this.synonyms" class="synonyms">
                        <div class="details">
                            <p>{{ synonyms }}</p>
                            <div class="list"></div>
                        </div>
                    </li>
                </div>
            </ul>
      </div>
</template>

<script>
import '../assets/styles.css'; 


export default {
    name :"Main",
    data (){
        return{
            meaning : " ",
            example : " ",
            synonyms:" ",
            partOfSpeech : " ",
            inputvalue : " ",
            infoText : "Type any existing word and press enter to get meaning",
            isactive : false,
            audio : null
        }
    },
    methods:{
        clearvalue(){
            this.infoText = "Type any existing word and press enter to get meaning",
            this.inputvalue = " "
            this.isactive = false
        },
        getvalue(word){
            if (!this.inputvalue.trim() == "") {
                let word = this.inputvalue;
                console.log(typeof word)
                this.infoText = `Searching the meaning of "${word}"`;
                let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
                fetch(url).then(response => response.json()).then(result =>this.updatedata(result)).catch(() =>{
                    this.infoText = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`
                    this.isactive = false
                });
            }
            else{
                this.isactive = false;
                this.infoText = "Type any existing word and press enter to get meaning";
            }
            
        },
        updatedata(result){
            this.partOfSpeech = result[0].meanings[0].partOfSpeech 
            this.meaning = result[0].meanings[0].definitions[0].definition
            this.example = result[0].meanings[0].definitions[0].example
            this.synonyms = result[0].meanings[0].definitions[0].synonyms[0]
            this.audio = new Audio(result[0].phonetics[0].audio);
            this.isactive = true
        },
    }
};
</script>
